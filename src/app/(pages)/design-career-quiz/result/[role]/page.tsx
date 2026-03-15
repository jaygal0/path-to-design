import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResultPage } from "@/components/ResultPage";
import { fetchSafe } from "@/lib/fetchSafe";
import { getRecommendedDesigners } from "@/lib/quizResults";
import { isRoleKey, roles } from "@/lib/roles";
import type { DesignerProps } from "@/types";

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

  const allDesigners = await fetchSafe(
    `${process.env.WEB_SITE}/api/designers`,
    {
      next: { revalidate: 86400 },
    },
    [],
  );
  const [allApps, allBooks, allProducts] = await Promise.all([
    fetchSafe(
      `${process.env.WEB_SITE}/api/apps`,
      {
        next: { revalidate: 86400 },
      },
      [],
    ),
    fetchSafe(
      `${process.env.WEB_SITE}/api/books`,
      {
        next: { revalidate: 86400 },
      },
      [],
    ),
    fetchSafe(
      `${process.env.WEB_SITE}/api/products`,
      {
        next: { revalidate: 86400 },
      },
      [],
    ),
  ]);

  const recommendedSlugs = getRecommendedDesigners(role).map(
    (designer) => designer.slug,
  );

  const recommendedDesigners: DesignerProps[] = recommendedSlugs
    .map((slug) => allDesigners.find((designer: any) => designer.slug === slug))
    .filter(Boolean)
    .map((designer: any) => ({
      company: designer.companies?.company ?? "",
      country: designer.country,
      firstName: designer.firstName,
      lastName: designer.lastName,
      oneLiner: designer.oneLiner,
      profileImage: designer.profileImage,
      role: designer.roles?.role ?? "",
      slug: designer.slug,
    }));

  const matchesRecommendedDesigners = (item: any) =>
    item.designers?.some((designer: any) =>
      recommendedSlugs.includes(designer.slug),
    );

  const recommendedApps = allApps
    .filter(matchesRecommendedDesigners)
    .slice(0, 8);
  const recommendedBooks = allBooks
    .filter(matchesRecommendedDesigners)
    .slice(0, 8);
  const recommendedProducts = allProducts
    .filter(matchesRecommendedDesigners)
    .slice(0, 8);

  return (
    <section className="flex min-h-[42rem] items-center py-6">
      <ResultPage
        role={role}
        recommendedDesigners={recommendedDesigners}
        recommendedApps={recommendedApps}
        recommendedBooks={recommendedBooks}
        recommendedProducts={recommendedProducts}
      />
    </section>
  );
}
