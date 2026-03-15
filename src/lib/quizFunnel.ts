import type { RoleKey } from "@/lib/roles";

export const quizSessionStorageKey = "path-to-design-quiz";

export const analyticsEvents = {
  QUIZ_STARTED: "quiz_started",
  QUESTION_ANSWERED: "question_answered",
  QUIZ_COMPLETED: "quiz_completed",
  EMAIL_ENTERED: "email_entered",
  RESULT_VIEWED: "result_viewed",
} as const;

export const experienceOptions = [
  "Completely new to design",
  "Learning design",
  "Building a portfolio",
  "Working as a designer",
  "Switching careers",
] as const;

export type ExperienceValue = (typeof experienceOptions)[number];

export interface QuizState {
  answers: number[];
  role: RoleKey | null;
  experience: ExperienceValue | null;
}

export const initialQuizState: QuizState = {
  answers: [],
  role: null,
  experience: null,
};

export const experienceAdvice: Record<ExperienceValue, string[]> = {
  "Completely new to design": [
    "Learn design fundamentals",
    "Study UX principles",
    "Practice redesigning apps",
  ],
  "Learning design": [
    "Build small interface projects every week",
    "Study flows, feedback, and usability",
    "Collect inspiration and explain your decisions",
  ],
  "Building a portfolio": [
    "Build 2-3 case studies",
    "Practice product thinking",
    "Contribute to real projects",
  ],
  "Working as a designer": [
    "Sharpen your specialization with real constraints",
    "Document outcomes, not just deliverables",
    "Learn from designers slightly ahead of you",
  ],
  "Switching careers": [
    "Translate existing skills",
    "Build portfolio projects",
    "Network with designers",
  ],
};

export function logQuizEvent(
  event: (typeof analyticsEvents)[keyof typeof analyticsEvents],
  payload?: Record<string, unknown>,
) {
  // Replace this with the real analytics client later.
  console.log(event, payload ?? {});
}
