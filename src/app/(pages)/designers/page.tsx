// app/browse/page.tsx
import BrowseDesigners from "@/components/directory/BrowseDesigners";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch designers");
  }

  const designers = await res.json();
  return { designers };
}

export default async function BrowsePageWrapper() {
  const { designers } = await getData();
  return <BrowseDesigners designers={designers} />;
}
