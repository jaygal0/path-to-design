// app/browse/page.tsx
import BrowseApps from "@/components/directory/BrowseApps";
import BrowseBooks from "@/components/directory/BrowseBooks";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/apps`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const apps = await res.json();
  return { apps };
}

export default async function BrowsePageWrapper() {
  const { apps } = await getData();
  return <BrowseApps apps={apps} />;
}
