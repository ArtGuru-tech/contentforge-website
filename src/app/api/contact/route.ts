import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Get webhook URL from environment variable
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('CONTACT_WEBHOOK_URL environment variable is not set')
      return NextResponse.json(
        { error: 'Contact service is not configured' },
        { status: 500 }
      )
    }

    // Prepare payload for webhook
    const webhookPayload = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      source: 'ContentForge Contact Form'
    }

    // Send to webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    })

    if (!webhookResponse.ok) {
      console.error('Webhook request failed:', webhookResponse.status)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
