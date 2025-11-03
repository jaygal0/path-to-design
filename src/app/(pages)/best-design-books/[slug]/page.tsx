import BrowseApp from "@/components/directory/BrowseApp";
import BrowseBook from "@/components/directory/BrowseBook";
import { PopularBooksSidebar } from "@/components/global/PopularBooksSidebar";
import { NewsletterSidebar } from "@/components/home/NewsletterSidebar";
import { PopularApps } from "@/components/home/PopularApps";
import { notFound } from "next/navigation";

export default async function BookDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const res = await fetch(`${process.env.WEB_SITE}/api/books/${slug}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    notFound();
  }

  const book = await res.json();

  const appsRes = await fetch(`${process.env.WEB_SITE}/api/apps`, {
    next: { revalidate: 86400 },
  });

  if (!appsRes.ok) {
    throw new Error("Failed to fetch books data");
  }

  const appsData = await appsRes.json();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2">
        <BrowseBook book={book} />
      </div>
      <div className="col-span-1">
        <div className="sticky top-8 flex flex-col gap-8">
          <NewsletterSidebar />
          <PopularApps apps={appsData} />
        </div>
      </div>
    </div>
  );
}
