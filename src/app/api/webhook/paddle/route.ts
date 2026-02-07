import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createGhostMember } from '@/lib/ghost-admin';

const PADDLE_WEBHOOK_SECRET = process.env.PADDLE_WEBHOOK_SECRET || '';
const PADDLE_LITE_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_LITE_PRICE_ID || '';
const PADDLE_PRO_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_PRO_PRICE_ID || '';

interface PaddleWebhookEvent {
  event_type: string;
  event_id: string;
  occurred_at: string;
  data: {
    id: string;
    status: string;
    customer_id: string;
    items: Array<{
      price: {
        id: string;
        product_id: string;
      };
      quantity: number;
    }>;
    customer: {
      id: string;
      email: string;
      name?: string;
    };
    custom_data?: {
      plan?: string;
    };
  };
}

function verifyWebhookSignature(
  rawBody: string,
  signature: string | null
): boolean {
  if (!signature || !PADDLE_WEBHOOK_SECRET) {
    console.error('Missing signature or webhook secret');
    return false;
  }

  try {
    // Paddle sends signature in format: ts=timestamp;h1=hash
    const signatureParts = signature.split(';');
    const tsMatch = signatureParts.find(p => p.startsWith('ts='));
    const h1Match = signatureParts.find(p => p.startsWith('h1='));

    if (!tsMatch || !h1Match) {
      console.error('Invalid signature format');
      return false;
    }

    const timestamp = tsMatch.replace('ts=', '');
    const providedHash = h1Match.replace('h1=', '');

    // Verify timestamp is not too old (5 minutes)
    const timestampAge = Math.floor(Date.now() / 1000) - parseInt(timestamp);
    if (timestampAge > 300) {
      console.error('Webhook timestamp too old');
      return false;
    }

    // Compute expected signature
    const signedPayload = `${timestamp}:${rawBody}`;
    const expectedHash = crypto
      .createHmac('sha256', PADDLE_WEBHOOK_SECRET)
      .update(signedPayload)
      .digest('hex');

    return crypto.timingSafeEqual(
      Buffer.from(providedHash),
      Buffer.from(expectedHash)
    );
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

function determineTierFromPriceId(priceId: string): 'lite' | 'pro' {
  if (priceId === PADDLE_PRO_PRICE_ID) {
    return 'pro';
  }
  return 'lite';
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('paddle-signature');

    // Verify webhook signature in production
    if (process.env.NODE_ENV === 'production') {
      if (!verifyWebhookSignature(rawBody, signature)) {
        console.error('Invalid webhook signature');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    }

    const event: PaddleWebhookEvent = JSON.parse(rawBody);

    console.log('Received Paddle webhook:', event.event_type, event.event_id);

    // Handle transaction completed events
    if (event.event_type === 'transaction.completed' || event.event_type === 'transaction.paid') {
      const { customer, items, custom_data } = event.data;

      if (!customer?.email) {
        console.error('No customer email in webhook payload');
        return NextResponse.json({ error: 'Missing customer email' }, { status: 400 });
      }

      // Determine tier from price ID or custom data
      let tier: 'lite' | 'pro' = 'lite';

      if (custom_data?.plan) {
        tier = custom_data.plan === 'pro' ? 'pro' : 'lite';
      } else if (items && items.length > 0) {
        tier = determineTierFromPriceId(items[0].price.id);
      }

      console.log(`Creating Ghost member: ${customer.email} with tier: ${tier}`);

      // Create or update Ghost member
      const result = await createGhostMember(customer.email, tier, customer.name);

      if (!result.success) {
        console.error('Failed to create Ghost member:', result.error);
        // Still return 200 to acknowledge receipt (Paddle will retry otherwise)
        return NextResponse.json({
          received: true,
          warning: 'Ghost member creation failed',
          error: result.error,
        });
      }

      console.log(`Ghost member created/updated successfully: ${result.memberId}`);

      return NextResponse.json({
        received: true,
        memberId: result.memberId,
        tier,
      });
    }

    // Handle other event types (log but don't process)
    console.log('Unhandled event type:', event.event_type);
    return NextResponse.json({ received: true, processed: false });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Paddle may send GET requests for webhook verification
export async function GET() {
  return NextResponse.json({ status: 'Paddle webhook endpoint active' });
}
