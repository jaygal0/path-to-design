// app/browse/page.tsx
import BrowseBooks from "@/components/directory/BrowseBooks";

async function getData() {
  try {
    const res = await fetch(`${process.env.WEB_SITE}/api/books`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      console.warn("Failed to fetch books: non‑OK response");
      return { books: [] };
    }

    const books = await res.json();
    return { books };
  } catch (error) {
    console.warn("Failed to fetch books during build:", error);
    return { books: [] };
  }
}

export default async function BrowsePageWrapper() {
  const { books } = await getData();
  return <BrowseBooks books={books} />;
}
