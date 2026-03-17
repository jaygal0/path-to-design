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
export type AdviceIconKey =
  | "graduation-cap"
  | "palette"
  | "scan-search"
  | "blocks"
  | "sparkles"
  | "target"
  | "file-text"
  | "pen-square"
  | "users"
  | "message-square-more"
  | "network"
  | "lightbulb";

export interface AdviceItem {
  text: string;
  icon: AdviceIconKey;
}

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

export const experienceAdvice: Record<ExperienceValue, AdviceItem[]> = {
  "Completely new to design": [
    { text: "Learn design fundamentals", icon: "graduation-cap" },
    { text: "Study UX principles", icon: "graduation-cap" },
    { text: "Practice redesigning apps", icon: "palette" },
    {
      text: "Study real products and analyse why they work",
      icon: "scan-search",
    },
  ],
  "Learning design": [
    { text: "Build small interface projects every week", icon: "blocks" },
    {
      text: "Study flows, feedback, and usability",
      icon: "scan-search",
    },
    {
      text: "Collect inspiration and explain your decisions",
      icon: "sparkles",
    },
    {
      text: "Recreate existing apps to understand design patterns",
      icon: "palette",
    },
  ],
  "Building a portfolio": [
    { text: "Build 2-3 strong case studies", icon: "blocks" },
    { text: "Practice product thinking", icon: "target" },
    { text: "Contribute to real projects", icon: "pen-square" },
    {
      text: "Document your design process and decisions",
      icon: "file-text",
    },
  ],
  "Working as a designer": [
    {
      text: "Sharpen your specialisation with real constraints",
      icon: "target",
    },
    {
      text: "Document outcomes, not just deliverables",
      icon: "file-text",
    },
    {
      text: "Learn from designers slightly ahead of you",
      icon: "users",
    },
    {
      text: "Improve collaboration with engineers and product managers",
      icon: "message-square-more",
    },
  ],
  "Switching careers": [
    { text: "Translate existing skills", icon: "lightbulb" },
    { text: "Build portfolio projects", icon: "pen-square" },
    { text: "Network with designers", icon: "network" },
    {
      text: "Show how your previous career strengthens your design perspective",
      icon: "sparkles",
    },
  ],
};

export function logQuizEvent(
  event: (typeof analyticsEvents)[keyof typeof analyticsEvents],
  payload?: Record<string, unknown>,
) {
  // Replace this with the real analytics client later.
  console.log(event, payload ?? {});
}
