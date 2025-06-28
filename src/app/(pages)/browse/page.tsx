// app/browse/page.tsx
import BrowsePage from "@/components/browse/BrowsePage";

async function getData() {
  const [designersRes, appsRes, booksRes] = await Promise.all([
    fetch(`${process.env.WEB_SITE}/api/designers`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.WEB_SITE}/api/apps`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.WEB_SITE}/api/books`, {
      next: { revalidate: 60 },
    }),
  ]);

  if (!designersRes.ok || !appsRes.ok || !booksRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [designers, apps, books] = await Promise.all([
    designersRes.json(),
    appsRes.json(),
    booksRes.json(),
  ]);

  return { designers, apps, books };
}

export default async function BrowsePageWrapper() {
  const { designers, apps, books } = await getData();

  return <BrowsePage designers={designers} apps={apps} books={books} />;
}
