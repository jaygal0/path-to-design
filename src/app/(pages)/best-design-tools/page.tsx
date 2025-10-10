// app/browse/page.tsx
import BrowseBooks from "@/components/directory/BrowseBooks";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/books`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const books = await res.json();
  return { books };
}

export default async function BrowsePageWrapper() {
  const { books } = await getData();
  return <BrowseBooks books={books} />;
}
