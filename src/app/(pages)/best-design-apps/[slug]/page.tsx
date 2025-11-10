import BrowseApp from "@/components/directory/BrowseApp";
import AppItem from "@/components/global/AppItem";
import { PopularBooksSidebar } from "@/components/global/PopularBooksSidebar";
import { NewsletterSidebar } from "@/components/global/NewsletterSidebar";
import { PopularApps } from "@/components/home/PopularApps";
import { Button } from "@/components/ui/button";
import { mainCTAs } from "@/config/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShareYourPath } from "@/components/global/ShareYourPath";

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

  // Fetch all apps
  const appsRes = await fetch(`${process.env.WEB_SITE}/api/apps`, {
    next: { revalidate: 86400 },
  });
  if (!appsRes.ok) {
    throw new Error("Failed to fetch apps data");
  }
  const allApps = await appsRes.json();

  // Filter out the current app and pick a few random ones
  const otherApps = allApps
    .filter((a: any) => a.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

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
        <div className="col-span-2 mt-8 h-fit rounded-2xl bg-neutral-900 p-3 md:p-6">
          <div className="mb-6 flex justify-between">
            <div className="text-lg text-muted-foreground">
              Explore more apps
            </div>
            <Link href={mainCTAs[3].href}>
              <Button variant="ghost" className="flex items-center gap-1">
                See all <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            {otherApps.map((otherApp: any, index: any) => {
              return <AppItem key={index} tool={otherApp} />;
            })}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="sticky top-8 flex flex-col gap-8">
          <div className="hidden lg:flex lg:flex-col lg:gap-8">
            <NewsletterSidebar />
            <ShareYourPath />
          </div>
          <PopularBooksSidebar books={booksData} />
        </div>
      </div>
    </div>
  );
}
