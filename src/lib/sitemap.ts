import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import prisma from "@/lib/db";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type SitemapUrl = {
  url: string;
  lastModified: Date;
  changeFrequency?: ChangeFrequency;
  priority?: number;
};

type BlogPostMeta = {
  slug: string;
  updatedAt?: string;
};

const BASE_URL = "https://pathtodesign.com";

function resolveValidSlug(input: unknown): string | null {
  const raw =
    typeof input === "string"
      ? input
      : typeof input === "object" && input !== null && "slug" in input
        ? (input as { slug?: unknown }).slug
        : null;

  if (typeof raw !== "string") return null;

  const slug = raw.trim();
  if (!slug || slug === "null" || slug === "undefined") {
    return null;
  }

  return slug;
}

function asDate(input: Date | string | null | undefined): Date {
  if (!input) return new Date();

  const date = input instanceof Date ? input : new Date(input);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderUrlSet(urls: SitemapUrl[]): string {
  const body = urls
    .map((entry) => {
      const parts = [
        `<loc>${escapeXml(entry.url)}</loc>`,
        `<lastmod>${entry.lastModified.toISOString()}</lastmod>`,
      ];

      if (entry.changeFrequency) {
        parts.push(`<changefreq>${entry.changeFrequency}</changefreq>`);
      }

      if (typeof entry.priority === "number") {
        parts.push(`<priority>${entry.priority.toFixed(1)}</priority>`);
      }

      return `<url>${parts.join("")}</url>`;
    })
    .join("");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    "</urlset>",
  ].join("");
}

function renderSitemapIndex(locations: Array<{ url: string; lastModified: Date }>) {
  const body = locations
    .map(
      (entry) =>
        `<sitemap><loc>${escapeXml(entry.url)}</loc><lastmod>${entry.lastModified.toISOString()}</lastmod></sitemap>`,
    )
    .join("");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    "</sitemapindex>",
  ].join("");
}

async function getBlogPosts() {
  const dir = path.join(process.cwd(), "content", "blog");
  let files: string[] = [];

  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const posts: Array<BlogPostMeta | null> = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const { data } = matter(raw);

        if (data.draft) return null;

        return {
          slug: file.replace(".mdx", ""),
          updatedAt: data.date,
        };
      }),
  );

  return posts.filter((post): post is BlogPostMeta => post !== null);
}

export function xmlResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

export async function getDesignerSitemapXml() {
  const designers = await prisma.designers.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
    orderBy: { createdAt: "asc" },
  });

  const urls: SitemapUrl[] = [
    {
      url: `${BASE_URL}/designers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...designers.flatMap((designer) => {
      const slug = resolveValidSlug(designer.slug);
      if (!slug) return [];

      return [
        {
          url: `${BASE_URL}/designers/${slug}`,
          lastModified: asDate(designer.updatedAt),
          changeFrequency: "monthly",
          priority: 0.8,
        } satisfies SitemapUrl,
      ];
    }),
  ];

  return renderUrlSet(urls);
}

export async function getBlogSitemapXml() {
  const posts = await getBlogPosts();

  const urls: SitemapUrl[] = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts.flatMap((post) => {
      const slug = resolveValidSlug(post.slug);
      if (!slug) return [];

      return [
        {
          url: `${BASE_URL}/blog/${slug}`,
          lastModified: asDate(post.updatedAt),
          changeFrequency: "monthly",
          priority: 0.7,
        } satisfies SitemapUrl,
      ];
    }),
  ];

  return renderUrlSet(urls);
}

export async function getAppsSitemapXml() {
  const apps = await prisma.apps.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const urls: SitemapUrl[] = [
    {
      url: `${BASE_URL}/best-design-apps`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...apps.flatMap((app) => {
      const slug = resolveValidSlug(app.slug);
      if (!slug) return [];

      return [
        {
          url: `${BASE_URL}/best-design-apps/${slug}`,
          lastModified: asDate(app.updatedAt),
          changeFrequency: "monthly",
          priority: 0.7,
        } satisfies SitemapUrl,
      ];
    }),
  ];

  return renderUrlSet(urls);
}

export async function getToolsSitemapXml() {
  const products = await prisma.products.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const urls: SitemapUrl[] = [
    {
      url: `${BASE_URL}/best-design-tools`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...products.flatMap((product) => {
      const slug = resolveValidSlug(product.slug);
      if (!slug) return [];

      return [
        {
          url: `${BASE_URL}/best-design-tools/${slug}`,
          lastModified: asDate(product.updatedAt),
          changeFrequency: "monthly",
          priority: 0.7,
        } satisfies SitemapUrl,
      ];
    }),
  ];

  return renderUrlSet(urls);
}

export async function getBooksSitemapXml() {
  const books = await prisma.books.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const urls: SitemapUrl[] = [
    {
      url: `${BASE_URL}/best-design-books`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...books.flatMap((book) => {
      const slug = resolveValidSlug(book.slug);
      if (!slug) return [];

      return [
        {
          url: `${BASE_URL}/best-design-books/${slug}`,
          lastModified: asDate(book.updatedAt),
          changeFrequency: "monthly",
          priority: 0.7,
        } satisfies SitemapUrl,
      ];
    }),
  ];

  return renderUrlSet(urls);
}

export function getSitemapIndexXml() {
  const now = new Date();

  return renderSitemapIndex([
    { url: `${BASE_URL}/sitemap-designers.xml`, lastModified: now },
    { url: `${BASE_URL}/sitemap-blog.xml`, lastModified: now },
    { url: `${BASE_URL}/sitemap-apps.xml`, lastModified: now },
    { url: `${BASE_URL}/sitemap-books.xml`, lastModified: now },
    { url: `${BASE_URL}/sitemap-tools.xml`, lastModified: now },
  ]);
}
