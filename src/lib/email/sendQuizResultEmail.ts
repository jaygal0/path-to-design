import { Resend } from "resend";

import prisma from "@/lib/db";
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

  await resend.emails.send({
    from: "Path to Design <no-reply@transactional.pathtodesign.com>",
    to: subscriber.email,
    subject: "Your design path",
    html: renderQuizResultEmail(subscriber, {
      apps: recommendations.emailResources.apps,
      books: recommendations.emailResources.books,
      tools: recommendations.emailResources.tools,
    }),
  });

  // Future email sequences can branch from this event log without changing the
  // initial submission flow or duplicating subscriber state.
  await prisma.$transaction([
    prisma.emailEvent.create({
      data: {
        subscriberId: subscriber.id,
        type: "sent",
        emailType: "quiz_result",
      },
    }),
    prisma.subscriber.update({
      where: { id: subscriber.id },
      data: { lastEmailSentAt: new Date() },
    }),
  ]);
}
