import { Resend } from "resend";

import prisma from "@/lib/db";
import { emailFrom, emailReplyTo } from "@/lib/email/config";
import { renderQuizResultEmail } from "@/lib/email/templates/quizResultTemplate";
import { getQuizRecommendations } from "@/lib/quizRecommendations";
import type { RoleKey } from "@/lib/roles";

const resend = new Resend(process.env.RESEND_API_KEY);

interface QuizEmailSubscriber {
  id: string;
  email: string;
  role: string;
  experience: string;
  answers: unknown;
}

export async function sendQuizResultEmail(subscriber: QuizEmailSubscriber) {
  const roleKey = subscriber.role as RoleKey;
  const recommendations = await getQuizRecommendations(roleKey);

  // This quiz result email is transactional, so it is always sent after a
  // successful submission even if marketing consent is not granted.
  await resend.emails.send({
    from: emailFrom,
    to: subscriber.email,
    replyTo: emailReplyTo,
    subject: "Your Path to Design: Results",
    html: renderQuizResultEmail(subscriber, {
      apps: recommendations.emailResources.apps,
      books: recommendations.emailResources.books,
      tools: recommendations.emailResources.tools,
    }),
  });

  // Keep the delivery tracking minimal for now. If you add richer email
  // sequences later, this is the place to expand with provider webhooks or
  // separate tracking tables.
  await prisma.subscriber.update({
    where: { id: subscriber.id },
    data: { lastEmailSentAt: new Date() },
  });
}
