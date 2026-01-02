import type { MetadataRoute } from "next";

async function getDesigners() {
  const res = await fetch("https://pathtodesign.com/api/designers");
  if (!res.ok) return [];
  return res.json();
}

async function getApps() {
  const res = await fetch("https://pathtodesign.com/api/apps");
  if (!res.ok) return [];
  return res.json();
}

async function getBooks() {
  const res = await fetch("https://pathtodesign.com/api/books");
  if (!res.ok) return [];
  return res.json();
}

async function getProducts() {
  const res = await fetch("https://pathtodesign.com/api/products");
  if (!res.ok) return [];
  return res.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pathtodesign.com";

  const [designers, apps, books, products] = await Promise.all([
    getDesigners(),
    getApps(),
    getBooks(),
    getProducts(),
  ]);

  // Designer pages
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

  // App pages
  const appPages = apps.map((app: { slug: string; updatedAt?: string }) => ({
    url: `${baseUrl}/best-design-apps/${app.slug}`,
    lastModified: app.updatedAt ? new Date(app.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Book pages
  const bookPages = books.map((book: { slug: string; updatedAt?: string }) => ({
    url: `${baseUrl}/best-design-books/${book.slug}`,
    lastModified: book.updatedAt ? new Date(book.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productPages = products.map(
    (product: { slug: string; updatedAt?: string }) => ({
      url: `${baseUrl}/best-design-tools/${product.slug}`,
      lastModified: product.updatedAt
        ? new Date(product.updatedAt)
        : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  // Static pages
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
      url: `${baseUrl}/best-design-tools`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/share-your-path`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
  ];

  // Combine everything
  return [
    ...staticPages,
    ...designerPages,
    ...appPages,
    ...bookPages,
    ...productPages,
  ];
}
