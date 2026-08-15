import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  escapeHtml,
  parseContactRequest,
  type ContactRequest,
} from '@/lib/contact';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured.');
      return NextResponse.json(
        { error: 'The contact form is temporarily unavailable.' },
        { status: 503 },
      );
    }

    const contact = parseContactRequest(await request.json());
    if (!contact) {
      return NextResponse.json({ error: 'Please check your form details.' }, { status: 400 });
    }

    // Bots commonly fill visually hidden fields. Return a neutral success response.
    if (contact.website) {
      return NextResponse.json({ success: true });
    }

    const safe = Object.fromEntries(
      Object.entries(contact).map(([key, value]) => [key, escapeHtml(value)]),
    ) as unknown as ContactRequest;
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL ?? 'masoud.mousavi.dev@gmail.com'],
      replyTo: contact.email,
      subject: `Portfolio enquiry from ${contact.firstname} ${contact.lastname}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui; padding: 24px; color: #111827;">
          <h2>New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${safe.firstname} ${safe.lastname}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Phone:</strong> ${safe.phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${safe.service || 'Not specified'}</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p><strong>Message</strong></p>
          <p style="white-space: pre-wrap; background: #f3f4f6; padding: 16px; border-radius: 10px;">${safe.message}</p>
        </div>
      `,
    });

    if (error) throw error;

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json(
      { error: 'Your message could not be sent. Please try again.' },
      { status: 500 },
    );
  }
}
