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
  {
    value: "Completely new to design",
  },
  {
    value: "Learning design",
  },
  {
    value: "Building a portfolio",
  },
  {
    value: "Working as a designer",
  },
  {
    value: "Switching careers",
  },
] as const;

export type ExperienceValue = (typeof experienceOptions)[number]["value"];

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
    "Study real products and analyse why they work",
  ],
  "Learning design": [
    "Build small interface projects every week",
    "Study flows, feedback, and usability",
    "Collect inspiration and explain your decisions",
    "Recreate existing apps to understand design patterns",
  ],
  "Building a portfolio": [
    "Build 2-3 strong case studies",
    "Practice product thinking",
    "Contribute to real projects",
    "Document your design process and decisions",
  ],
  "Working as a designer": [
    "Sharpen your specialisation with real constraints",
    "Document outcomes, not just deliverables",
    "Learn from designers slightly ahead of you",
    "Improve collaboration with engineers and product managers",
  ],
  "Switching careers": [
    "Translate existing skills",
    "Build portfolio projects",
    "Network with designers",
    "Show how your previous career strengthens your design perspective",
  ],
};

export function logQuizEvent(
  event: (typeof analyticsEvents)[keyof typeof analyticsEvents],
  payload?: Record<string, unknown>,
) {
  // Replace this with the real analytics client later.
  console.log(event, payload ?? {});
}
