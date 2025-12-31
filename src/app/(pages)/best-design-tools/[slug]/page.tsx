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
import BrowseProduct from "@/components/directory/BrowseProduct";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const res = await fetch(`${process.env.WEB_SITE}/api/products/${slug}`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return {
        title: "Tool not found | Path to Design",
        description: "Explore the best design tool on Path to Design.",
      };
    }

    const product = await res.json();

    const title = `${product.name} | Path to Design`;

    const description =
      product.description ||
      `Discover ${product.name}, a tool that designers recommend that's featured on Path to Design.`;

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
            alt: `${product.name} on Path to Design`,
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
    const products = await fetch(`${process.env.WEB_SITE}/api/products`, {
      next: { revalidate: 86400 },
    }).then((res) => res.json());

    return (products || [])
      .map((product: any) => {
        const slug =
          typeof product.slug === "string"
            ? product.slug
            : typeof product.slug?.slug === "string"
              ? product.slug.slug
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

  const product = await fetchSafe(
    `${process.env.WEB_SITE}/api/products/${slug}`,
    {
      next: { revalidate: 86400 },
    },
    null,
  );

  if (!product) {
    notFound();
  }

  const allProducts = await fetchSafe(
    `${process.env.WEB_SITE}/api/products`,
    {
      next: { revalidate: 86400 },
    },
    [],
  );

  // Filter out the current book and randomize order, then slice to 3
  const otherProducts = (allProducts || [])
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

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2">
        <BrowseProduct product={product} />
        <div className="col-span-2 mt-20 h-fit">
          <div className="mb-6 flex gap-4">
            <div className="text-2xl text-muted-foreground">
              Explore more tools
            </div>
            <Link href={mainCTAs[4].href}>
              <Button variant="ghost" className="flex items-center gap-1">
                See all <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            {/* {otherProducts.map((book: any, index: any) => {
              return <BookItem key={index} item={book} />;
            })} */}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="sticky top-20 flex flex-col gap-8">
          <NewsletterSidebar />
        </div>
      </div>
    </div>
  );
}
