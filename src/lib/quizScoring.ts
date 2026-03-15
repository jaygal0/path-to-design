import type { QuizAnswer } from "@/lib/quizQuestions";
import { roleOrder, type RoleKey } from "@/lib/roles";

export type QuizScores = Record<RoleKey, number>;

export const initialQuizScores: QuizScores = {
  product: 0,
  ux: 0,
  ui: 0,
  research: 0,
  motion: 0,
  brand: 0,
  engineer: 0,
};

export function calculateQuizScores(answers: QuizAnswer[]): QuizScores {
  // Each answer contributes points to one or more roles, which keeps the
  // scoring logic easy to extend when we add more questions later.
  return answers.reduce<QuizScores>((scores, answer) => {
    const nextScores = { ...scores };

    Object.entries(answer.score).forEach(([role, value]) => {
      nextScores[role as RoleKey] += value ?? 0;
    });

    return nextScores;
  }, initialQuizScores);
}

export function getTopRole(scores: QuizScores): RoleKey {
  // Ties are resolved by the required priority order in `roleOrder`.
  return roleOrder.reduce((bestRole, currentRole) => {
    if (scores[currentRole] > scores[bestRole]) {
      return currentRole;
    }

    return bestRole;
  }, roleOrder[0]);
}

export function calculateQuizResult(answers: QuizAnswer[]): RoleKey {
  return getTopRole(calculateQuizScores(answers));
}
