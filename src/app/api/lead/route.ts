import { NextRequest, NextResponse } from 'next/server';

// Forwards leads to the Yes Crew CRM form endpoint for Home Organizers Atlanta.
// The provider is resolved there from the opaque form_key — never spoofable.
const CRM_FORM_URL =
  'https://yescrew-dashboard.vercel.app/api/forms/89e7674040894acdb3292d9472b61637/submit';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, consultationType, address, message, submission_id, elapsed_ms, company_website } = body;

    // Validate required fields (phone is required by the CRM endpoint)
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    const serviceLabels: Record<string, string> = {
      'home-organization': 'Home Organization',
      'office-organization': 'Office Organization',
      'move-in-out': 'Move-In / Move-Out',
      'custom-closet': 'Custom Closet Design',
      'decluttering': 'Decluttering',
    };

    const parts = [
      service ? `Service: ${serviceLabels[service] ?? service}` : null,
      consultationType ? `Consultation preference: ${consultationType === 'in-person' ? 'In-Person' : consultationType === 'zoom' ? 'Zoom' : 'Virtual'}` : null,
      consultationType === 'in-person' && address ? `Address: ${address}` : null,
      message || null,
    ].filter(Boolean);

    const crmResponse = await fetch(CRM_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        service_needed: parts.join(' | ') || null,
        submission_id,
        elapsed_ms,
        company_website, // honeypot passthrough
      }),
    });

    if (!crmResponse.ok) {
      console.error('CRM form submit failed:', crmResponse.status);
      return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
