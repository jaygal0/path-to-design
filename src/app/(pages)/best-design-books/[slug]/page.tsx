import BrowseApp from "@/components/directory/BrowseApp";
import BrowseBook from "@/components/directory/BrowseBook";
import BookItem from "@/components/global/BookItem";
import { NewsletterSidebar } from "@/components/home/NewsletterSidebar";
import { PopularApps } from "@/components/home/PopularApps";
import { Button } from "@/components/ui/button";
import { mainCTAs } from "@/config/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
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

  const allBooksRes = await fetch(`${process.env.WEB_SITE}/api/books`, {
    next: { revalidate: 86400 },
  });

  if (!allBooksRes.ok) {
    throw new Error("Failed to fetch all books data");
  }

  const allBooks = await allBooksRes.json();

  // Filter out the current book and randomize order, then slice to 3
  const otherBooks = allBooks
    .filter((b: any) => b.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

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
        <div className="col-span-2 mt-8 h-fit rounded-2xl bg-neutral-900 p-3 md:p-6">
          <div className="mb-6 flex justify-between">
            <div className="text-lg text-muted-foreground">
              Explore more books
            </div>
            <Link href={mainCTAs[4].href}>
              <Button variant="ghost" className="flex items-center gap-1">
                See all <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            {otherBooks.map((book: any, index: any) => {
              return <BookItem key={index} item={book} />;
            })}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="sticky top-8 flex flex-col gap-8">
          <div className="hidden lg:block">
            <NewsletterSidebar />
          </div>
          <PopularApps apps={appsData} />
        </div>
      </div>
    </div>
  );
}
