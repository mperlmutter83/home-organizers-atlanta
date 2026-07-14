import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // TODO: Replace with your actual CRM/webhook endpoint
    // Example: Send to a webhook
    // const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       phone,
    //       service,
    //       message,
    //       source: 'homeorganizersatlanta.com',
    //       submitted_at: new Date().toISOString(),
    //     }),
    //   });
    // }

    // For now, just log the lead (visible in Vercel logs)
    console.log('New lead received:', {
      name,
      email,
      phone,
      service,
      message,
      submitted_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
