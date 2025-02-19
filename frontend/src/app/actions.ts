'use server'

import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const organization = formData.get('organization') as string
  const eventType = formData.get('eventType') as string
  const message = formData.get('message') as string

  if (!resend) {
    console.log('Email service not configured. Would send:', {
      name,
      email,
      organization,
      eventType,
      message
    });
    return { success: true, development: true };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <contact@ectsyawo.com>',
      to: ['contact@ectsyawo.com'],
      subject: `New Speaking Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Organization: ${organization}
        Event Type: ${eventType}
        Message: ${message}
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' }
  }
} 