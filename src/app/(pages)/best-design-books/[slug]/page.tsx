import type { Metadata } from "next";
import BrowseBook from "@/components/directory/BrowseBook";
import BookItem from "@/components/global/BookItem";
import { Button } from "@/components/ui/button";
import { mainCTAs } from "@/config/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchSafe } from "@/lib/fetchSafe";
import { NewsletterSidebar } from "@/components/global/NewsletterSidebar";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const res = await fetch(`${process.env.WEB_SITE}/api/books/${slug}`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return {
        title: "Book not found | Path to Design",
        description: "Explore the best design books on Path to Design.",
      };
    }

    const book = await res.json();

    const title = `${book.book} | Path to Design`;

    const description =
      book.description ||
      `Discover ${book.book}, a book that designers recommend that's featured on Path to Design.`;

    const canonicalUrl = `https://www.pathtodesign.com/best-design-books/${slug}`;
    const ogImage = "/path-to-design-og-image.jpg";

    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "Path to Design",
        type: "website",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `${book.book} on Path to Design`,
          },
        ],
        locale: "en",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (err) {
    console.error("generateMetadata: failed to fetch book metadata:", err);
    return {
      title: "Book not found | Path to Design",
      description: "Explore the best design books on Path to Design.",
    };
  }
}

export async function generateStaticParams() {
  try {
    const books = await fetch(`${process.env.WEB_SITE}/api/books`, {
      next: { revalidate: 86400 },
    }).then((res) => res.json());

    return (books || [])
      .map((book: any) => {
        const slug =
          typeof book.slug === "string"
            ? book.slug
            : typeof book.slug?.slug === "string"
              ? book.slug.slug
              : null;

        return slug ? { slug } : null;
      })
      .filter(Boolean) as { slug: string }[];
  } catch (err) {
    console.error("generateStaticParams: failed to fetch books:", err);
    return [];
  }
}

export default async function BookDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const book = await fetchSafe(
    `${process.env.WEB_SITE}/api/books/${slug}`,
    {
      next: { revalidate: 86400 },
    },
    null,
  );

  if (!book) {
    notFound();
  }

  const allBooks = await fetchSafe(
    `${process.env.WEB_SITE}/api/books`,
    {
      next: { revalidate: 86400 },
    },
    [],
  );

  // Filter out the current book and randomize order, then slice to 3
  const otherBooks = (allBooks || [])
    .filter((b: any) => b.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  const appsData = await fetchSafe(
    `${process.env.WEB_SITE}/api/apps`,
    {
      next: { revalidate: 86400 },
    },
    [],
  );

  const designers = await fetchSafe(
    `${process.env.WEB_SITE}/api/designers`,
    {
      next: { revalidate: 86400 },
    },
    [],
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2">
        <BrowseBook book={book} />
        <div className="col-span-2 mt-20 h-fit">
          <div className="mb-6 flex gap-4">
            <div className="text-2xl text-muted-foreground">
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
        {/* TODO: Show when ready */}
        {/* <div className="sticky top-20 flex flex-col gap-8"> */}
        <div className="sticky top-20 hidden flex-col gap-8">
          <NewsletterSidebar designers={designers.length} />
        </div>
      </div>
    </div>
  );
}
