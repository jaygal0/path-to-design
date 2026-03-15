"use client";

import {
  analyticsEvents,
  initialQuizState,
  quizSessionStorageKey,
  type QuizState,
} from "@/lib/quizFunnel";
import { isRoleKey } from "@/lib/roles";

export { analyticsEvents, quizSessionStorageKey, initialQuizState };
export type { QuizState };

export function getSafeQuizState(): QuizState | null {
  const rawValue = window.sessionStorage.getItem(quizSessionStorageKey);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as QuizState;

    if (parsed.role && !isRoleKey(parsed.role)) {
      return null;
    }

    return {
      answers: Array.isArray(parsed.answers)
        ? parsed.answers.filter((value) => typeof value === "number")
        : initialQuizState.answers,
      role: parsed.role ?? null,
      experience: parsed.experience ?? null,
    };
  } catch {
    return null;
  }
}

export function saveQuizState(state: QuizState) {
  window.sessionStorage.setItem(quizSessionStorageKey, JSON.stringify(state));
}
