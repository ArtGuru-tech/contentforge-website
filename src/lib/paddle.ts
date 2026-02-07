"use client"

declare global {
  interface Window {
    Paddle?: {
      Environment: {
        set: (env: 'sandbox' | 'production') => void;
      };
      Initialize: (options: { token: string }) => void;
      Checkout: {
        open: (options: PaddleCheckoutOptions) => void;
      };
    };
  }
}

interface PaddleCheckoutOptions {
  items: Array<{
    priceId: string;
    quantity: number;
  }>;
  customer?: {
    email?: string;
  };
  customData?: Record<string, string>;
  settings?: {
    displayMode?: 'overlay' | 'inline';
    theme?: 'light' | 'dark';
    locale?: string;
    successUrl?: string;
  };
}

export type PlanType = 'lite' | 'pro';

const PRICE_IDS: Record<PlanType, string> = {
  lite: process.env.NEXT_PUBLIC_PADDLE_LITE_PRICE_ID || '',
  pro: process.env.NEXT_PUBLIC_PADDLE_PRO_PRICE_ID || '',
};

let isInitialized = false;

export function initializePaddle(): void {
  if (typeof window === 'undefined' || isInitialized) return;

  const vendorId = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
  const environment = process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT as 'sandbox' | 'production' || 'sandbox';

  if (!vendorId) {
    if (process.env.NODE_ENV === 'development') {
      console.info('[Paddle] Client token not configured - payment features disabled');
    }
    return;
  }

  if (window.Paddle) {
    window.Paddle.Environment.set(environment);
    window.Paddle.Initialize({ token: vendorId });
    isInitialized = true;
  }
}

export function openCheckout(plan: PlanType, locale?: string): void {
  if (typeof window === 'undefined' || !window.Paddle) {
    console.error('Paddle not loaded');
    return;
  }

  const priceId = PRICE_IDS[plan];
  if (!priceId) {
    console.error(`Price ID not configured for plan: ${plan}`);
    return;
  }

  const successUrl = process.env.NEXT_PUBLIC_PADDLE_SUCCESS_URL || 'https://app.contentforge.cc/welcome';

  window.Paddle.Checkout.open({
    items: [{ priceId, quantity: 1 }],
    customData: {
      plan: plan,
    },
    settings: {
      displayMode: 'overlay',
      theme: 'light',
      locale: locale || 'en',
      successUrl: successUrl,
    },
  });
}
