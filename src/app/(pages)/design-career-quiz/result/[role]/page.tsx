import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResultPage } from "@/components/ResultPage";
import { getQuizRecommendations } from "@/lib/quizRecommendations";
import { isRoleKey, roles } from "@/lib/roles";

interface ResultRouteProps {
  params: Promise<{
    role: string;
  }>;
}

export async function generateMetadata({
  params,
}: ResultRouteProps): Promise<Metadata> {
  const { role } = await params;

  if (!isRoleKey(role)) {
    return {
      title: "Your Design Path | Path to Design",
    };
  }

  return {
    title: `${roles[role].name} | Path to Design`,
    description: roles[role].description,
  };
}

export default async function DesignCareerQuizResultPage({
  params,
}: ResultRouteProps) {
  const { role } = await params;

  if (!isRoleKey(role)) {
    notFound();
  }

  const recommendations = await getQuizRecommendations(role);

  return (
    <section className="flex min-h-[42rem] items-center py-6">
      <ResultPage
        role={role}
        recommendedDesigners={recommendations.designers}
        recommendedApps={recommendations.apps}
        recommendedBooks={recommendations.books}
        recommendedProducts={recommendations.products}
      />
    </section>
  );
}
