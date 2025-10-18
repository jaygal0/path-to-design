import type { MetadataRoute } from "next";

// Example: Replace this with your real data fetching logic
async function getDesigners() {
  // If you store designers in a local JSON file, CMS, or API, fetch them here.
  // For example:
  const res = await fetch("https://pathtodesign.com/api/designers");
  if (!res.ok) return [];
  const designers = await res.json();
  return designers;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pathtodesign.com";

  const designers = await getDesigners();

  // Map designer pages
  const designerPages = designers.map(
    (designer: { slug: string; updatedAt?: string }) => ({
      url: `${baseUrl}/designers/${designer.slug}`,
      lastModified: designer.updatedAt
        ? new Date(designer.updatedAt)
        : new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  // Static routes
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/designers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/share-your-path`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-design-apps`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-design-books`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
  ];

  // Combine static + dynamic
  return [...staticPages, ...designerPages];
}
