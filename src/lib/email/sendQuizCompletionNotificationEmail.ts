import { Resend } from "resend";

import {
  emailFrom,
  emailReplyTo,
  internalEmailTo,
} from "@/lib/email/config";

const resend = new Resend(process.env.RESEND_API_KEY);

interface QuizCompletionNotificationInput {
  email: string;
  role: string;
  experience: string;
  marketingConsent: boolean;
}

export async function sendQuizCompletionNotificationEmail({
  email,
  role,
  experience,
  marketingConsent,
}: QuizCompletionNotificationInput) {
  if (!process.env.RESEND_API_KEY) {
    return;
  }

  // Keep this intentionally minimal so internal notifications can grow
  // separately from the subscriber-facing transactional emails later.
  await resend.emails.send({
    from: emailFrom,
    to: internalEmailTo,
    replyTo: emailReplyTo,
    subject: "Quiz completed",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h1 style="font-size: 18px; margin-bottom: 12px;">Quiz completed</h1>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 0 0 8px;"><strong>Role:</strong> ${role}</p>
        <p style="margin: 0 0 8px;"><strong>Experience:</strong> ${experience}</p>
        <p style="margin: 0;">
          <strong>Marketing consent:</strong> ${marketingConsent ? "Yes" : "No"}
        </p>
      </div>
    `,
  });
}
