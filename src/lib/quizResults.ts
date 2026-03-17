import { designersByRole } from "@/lib/designersByRole";
import {
  experienceAdvice,
  type AdviceItem,
  type ExperienceValue,
} from "@/lib/quizFunnel";
import { quizQuestions } from "@/lib/quizQuestions";
import { roles, type RoleKey } from "@/lib/roles";

export function getRoleExplanation(role: RoleKey) {
  return roles[role].description;
}

export function generateResultExplanation(answerIndexes: number[]) {
  const hints = answerIndexes
    .map((answerIndex, questionIndex) => {
      const answer = quizQuestions[questionIndex]?.answers[answerIndex];
      return answer?.resultHint;
    })
    .filter(Boolean) as string[];

  const uniqueHints = [...new Set(hints)].slice(0, 3);

  if (uniqueHints.length === 0) {
    return "Based on your answers, this path reflects the kind of design work that seems most energising to you.";
  }

  if (uniqueHints.length === 1) {
    return `Based on your answers you enjoy ${uniqueHints[0]}.`;
  }

  if (uniqueHints.length === 2) {
    return `Based on your answers you enjoy ${uniqueHints[0]} and ${uniqueHints[1]}.`;
  }

  return `Based on your answers you enjoy ${uniqueHints[0]}, ${uniqueHints[1]}, and ${uniqueHints[2]}.`;
}

export function getExperienceAdvice(
  experience: ExperienceValue | null,
): AdviceItem[] {
  return experience ? experienceAdvice[experience] : [];
}

export function getRecommendedDesigners(role: RoleKey) {
  return designersByRole[role];
}
