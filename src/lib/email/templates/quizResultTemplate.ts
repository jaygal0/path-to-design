import { designersByRole } from "@/lib/designersByRole";
import { experienceAdvice } from "@/lib/quizFunnel";
import { roles, type RoleKey } from "@/lib/roles";

interface QuizEmailSubscriber {
  email: string;
  role: string;
  experience: string;
  answers: unknown;
}

interface QuizEmailResource {
  label: string;
  href: string;
}

function getBaseUrl() {
  return process.env.WEB_SITE || "https://pathtodesign.com";
}

export function renderQuizResultEmail(
  subscriber: QuizEmailSubscriber,
  resources?: {
    apps: QuizEmailResource[];
    books: QuizEmailResource[];
    tools: QuizEmailResource[];
  },
) {
  const roleKey = subscriber.role as RoleKey;
  const role = roles[roleKey];
  const nextSteps =
    experienceAdvice[subscriber.experience as keyof typeof experienceAdvice] ??
    [];
  const recommendedDesigners = designersByRole[roleKey] ?? [];
  const resultUrl = `${getBaseUrl()}/design-career-quiz/result/${subscriber.role}`;
  const unsubscribeUrl = `${getBaseUrl()}/unsubscribe?email=${encodeURIComponent(subscriber.email)}`;

  // Add richer sections here later if the quiz evolves into a fuller email
  // sequence with multiple content blocks or branching templates.
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <p style="margin-bottom: 12px;">Thank you for taking the Path to Design quiz!</p>
      <h1 style="font-size: 18px; margin-bottom: 8px;">Your Design Path: ${role?.name ?? subscriber.role}</h1>
      <p style="margin-bottom: 12px;">${role?.description ?? ""}</p>
      <p style="margin-bottom: 24px;"><strong>Based on your experience:</strong> ${subscriber.experience}</p>

      <h2 style="font-size: 20px; margin-bottom: 12px;">Next steps</h2>
      <ul style="margin: 0 0 24px 20px; padding: 0;">
        ${nextSteps.map((item) => `<li style="margin-bottom: 8px;">${item.text}</li>`).join("")}
      </ul>

      <h2 style="font-size: 20px; margin-bottom: 12px;">Designers to learn from</h2>
      <ul style="margin: 0 0 24px 20px; padding: 0;">
        ${recommendedDesigners
          .slice(0, 10)
          .map(
            (designer) =>
              `<li style="margin-bottom: 8px;"><a href="${getBaseUrl()}/designers/${designer.slug}" style="color: #16a34a; text-decoration: none;">${designer.name}</a></li>`,
          )
          .join("")}
      </ul>

      ${
        resources?.apps?.length
          ? `
        <h2 style="font-size: 20px; margin-bottom: 12px;">Recommended apps</h2>
        <ul style="margin: 0 0 24px 20px; padding: 0;">
          ${resources.apps
            .map(
              (app) =>
                `<li style="margin-bottom: 8px;"><a href="${app.href}" style="color: #16a34a; text-decoration: none;">${app.label}</a></li>`,
            )
            .join("")}
        </ul>
      `
          : ""
      }

      ${
        resources?.books?.length
          ? `
        <h2 style="font-size: 20px; margin-bottom: 12px;">Recommended books</h2>
        <ul style="margin: 0 0 24px 20px; padding: 0;">
          ${resources.books
            .map(
              (book) =>
                `<li style="margin-bottom: 8px;"><a href="${book.href}" style="color: #16a34a; text-decoration: none;">${book.label}</a></li>`,
            )
            .join("")}
        </ul>
      `
          : ""
      }

      ${
        resources?.tools?.length
          ? `
        <h2 style="font-size: 20px; margin-bottom: 12px;">Recommended tools</h2>
        <ul style="margin: 0 0 24px 20px; padding: 0;">
          ${resources.tools
            .map(
              (tool) =>
                `<li style="margin-bottom: 8px;"><a href="${tool.href}" style="color: #16a34a; text-decoration: none;">${tool.label}</a></li>`,
            )
            .join("")}
        </ul>
      `
          : ""
      }

      <p style="margin-top: 24px;">
        <a href="${resultUrl}" style="display: inline-block; background: #4ade80; color: #111827; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-weight: 600;">
          View your result
        </a>
      </p>

      <hr style="margin: 32px 0; border: 0; border-top: 1px solid #e5e7eb;" />
      <p style="font-size: 14px; color: #6b7280;">
        You are receiving this because you completed the Path to Design quiz.
      </p>
      <p style="font-size: 14px; color: #6b7280;">
        <a href="${unsubscribeUrl}" style="color: #16a34a; text-decoration: none;">Unsubscribe</a>
      </p>
    </div>
  `;
}
