import { Resend } from "resend";

import { emailFrom, emailReplyTo, internalEmailTo } from "@/lib/email/config";
import type { ExperienceValue } from "@/lib/quizFunnel";

const resend = new Resend(process.env.RESEND_API_KEY);

const experienceFollowUpMessages: Record<ExperienceValue, string[]> = {
  "Completely new to design": [
    "Hey,",
    "",
    "I saw you filled in the Path to Design quiz and that you’re completely new to design. What got you interested in design in the first place?",
  ],
  "Learning design": [
    "Hey,",
    "",
    "I saw you filled in the Path to Design quiz and that you’re currently learning design. How long have you been learning so far?",
  ],
  "Building a portfolio": [
    "Hey,",
    "",
    "I saw you filled in the Path to Design quiz and that you’re building a portfolio. What kind of projects are you working on at the moment?",
  ],
  "Working as a designer": [
    "Hey,",
    "",
    "I saw you filled in the Path to Design quiz and that you’re working as a designer. What kind of work are you doing at the moment?",
  ],
  "Switching careers": [
    "Hey,",
    "",
    "I saw you filled in the Path to Design quiz and that you’re switching into design. What were you doing before this?",
  ],
};

function renderFollowUpMessage(experience: string) {
  const lines = experienceFollowUpMessages[experience as ExperienceValue] ?? [
    "Hey,",
    "",
    "I saw you filled in the Path to Design quiz. I’d love to hear a bit more about where you’re at right now.",
  ];

  return lines
    .map((line) =>
      line
        ? `<p style="margin: 0 0 8px;">${line}</p>`
        : `<div style="height: 8px;"></div>`,
    )
    .join("");
}

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
        <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e5e7eb;" />
        <div>
          <h2 style="font-size: 16px; margin: 0 0 12px;">Suggested follow-up</h2>
          ${renderFollowUpMessage(experience)}
        </div>
      </div>
    `,
  });
}
