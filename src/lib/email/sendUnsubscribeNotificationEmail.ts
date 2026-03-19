import { Resend } from "resend";

import {
  emailFrom,
  emailReplyTo,
  internalEmailTo,
} from "@/lib/email/config";

const resend = new Resend(process.env.RESEND_API_KEY);

interface UnsubscribeNotificationInput {
  email: string;
}

export async function sendUnsubscribeNotificationEmail({
  email,
}: UnsubscribeNotificationInput) {
  if (!process.env.RESEND_API_KEY) {
    return;
  }

  // Keep this lightweight for now. If you add more lifecycle emails later,
  // this helper is the right place to expand the internal notification format.
  await resend.emails.send({
    from: emailFrom,
    to: internalEmailTo,
    replyTo: emailReplyTo,
    subject: "Quiz unsubscribe notification",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h1 style="font-size: 18px; margin-bottom: 12px;">Subscriber unsubscribed</h1>
        <p style="margin: 0 0 8px;">
          <strong>Email:</strong> ${email}
        </p>
        <p style="margin: 0;">
          <strong>Time:</strong> ${new Date().toISOString()}
        </p>
      </div>
    `,
  });
}
