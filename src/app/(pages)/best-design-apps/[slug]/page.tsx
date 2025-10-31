import BrowseApp from "@/components/directory/BrowseApp";
import { PopularBooksSidebar } from "@/components/global/PopularBooksSidebar";
import { PopularApps } from "@/components/home/PopularApps";
import { notFound } from "next/navigation";

export default async function AppDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const res = await fetch(`${process.env.WEB_SITE}/api/apps/${slug}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    notFound();
  }

  const app = await res.json();

  const booksRes = await fetch(`${process.env.WEB_SITE}/api/books`, {
    next: { revalidate: 86400 },
  });

  if (!booksRes.ok) {
    throw new Error("Failed to fetch books data");
  }

  const booksData = await booksRes.json();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2">
        <BrowseApp app={app} />
      </div>
      <div className="col-span-1">
        <div className="sticky top-8">
          <PopularBooksSidebar books={booksData} />
        </div>
      </div>
    </div>
  );
}
