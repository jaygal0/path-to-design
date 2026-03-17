import prisma from "@/lib/db";
import { designersByRole } from "@/lib/designersByRole";
import type { RoleKey } from "@/lib/roles";
import type { DesignerProps } from "@/types";

interface ResourceLink {
  label: string;
  href: string;
}

interface RecommendedApp {
  app: string;
  slug: string;
}

interface RecommendedBook {
  book: string;
  slug: string;
  bookCover: string;
}

interface RecommendedProduct {
  name: string;
  slug: string;
}

export interface QuizRecommendations {
  designers: DesignerProps[];
  apps: RecommendedApp[];
  books: RecommendedBook[];
  products: RecommendedProduct[];
  emailResources: {
    apps: ResourceLink[];
    books: ResourceLink[];
    tools: ResourceLink[];
  };
}

function getBaseUrl() {
  return process.env.WEB_SITE || "https://pathtodesign.com";
}

export async function getQuizRecommendations(
  role: RoleKey,
): Promise<QuizRecommendations> {
  const recommendedSlugs = designersByRole[role]?.map(
    (designer) => designer.slug,
  );

  const [designers, apps, books, products] = await Promise.all([
    prisma.designers.findMany({
      where: {
        slug: { in: recommendedSlugs },
      },
      include: {
        companies: true,
        roles: true,
      },
    }),
    prisma.apps.findMany({
      where: {
        designers: {
          some: {
            slug: { in: recommendedSlugs },
          },
        },
      },
      select: {
        app: true,
        slug: true,
        designers: {
          select: {
            slug: true,
          },
        },
      },
    }),
    prisma.books.findMany({
      where: {
        designers: {
          some: {
            slug: { in: recommendedSlugs },
          },
        },
      },
      select: {
        book: true,
        slug: true,
        bookCover: true,
        designers: {
          select: {
            slug: true,
          },
        },
      },
    }),
    prisma.products.findMany({
      where: {
        designers: {
          some: {
            slug: { in: recommendedSlugs },
          },
        },
      },
      select: {
        name: true,
        slug: true,
        designers: {
          select: {
            slug: true,
          },
        },
      },
    }),
  ]);

  const countMatchedDesigners = (item: { designers: { slug: string | null }[] }) =>
    item.designers.filter((designer) => recommendedSlugs.includes(designer.slug ?? ""))
      .length;

  const sortedDesigners: DesignerProps[] = recommendedSlugs
    .map((slug) => designers.find((designer) => designer.slug === slug))
    .filter(Boolean)
    .map((designer) => ({
      company: designer!.companies?.company ?? "",
      country: designer!.country ?? undefined,
      firstName: designer!.firstName ?? "",
      lastName: designer!.lastName ?? "",
      oneLiner: designer!.oneLiner ?? undefined,
      profileImage: designer!.profileImage ?? undefined,
      role: designer!.roles?.role ?? "",
      slug: designer!.slug ?? undefined,
    }));

  const sortedApps = apps
    .filter((app) => app.app && app.slug)
    .sort((a, b) => countMatchedDesigners(b) - countMatchedDesigners(a))
    .slice(0, 8)
    .map((app) => ({
      app: app.app!,
      slug: app.slug!,
    }));

  const sortedBooks = books
    .filter((book) => book.book && book.slug && book.bookCover)
    .sort((a, b) => countMatchedDesigners(b) - countMatchedDesigners(a))
    .slice(0, 8)
    .map((book) => ({
      book: book.book!,
      slug: book.slug!,
      bookCover: book.bookCover!,
    }));

  const sortedProducts = products
    .filter((product) => product.name && product.slug)
    .sort((a, b) => countMatchedDesigners(b) - countMatchedDesigners(a))
    .slice(0, 8)
    .map((product) => ({
      name: product.name!,
      slug: product.slug!,
    }));

  return {
    designers: sortedDesigners,
    apps: sortedApps,
    books: sortedBooks,
    products: sortedProducts,
    emailResources: {
      apps: sortedApps.map((app) => ({
        label: app.app,
        href: `${getBaseUrl()}/best-design-apps/${app.slug}`,
      })),
      books: sortedBooks.map((book) => ({
        label: book.book,
        href: `${getBaseUrl()}/best-design-books/${book.slug}`,
      })),
      tools: sortedProducts.map((product) => ({
        label: product.name,
        href: `${getBaseUrl()}/best-design-tools/${product.slug}`,
      })),
    },
  };
}
