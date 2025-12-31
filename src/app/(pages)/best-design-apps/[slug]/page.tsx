import type { Metadata } from "next";
import BrowseApp from "@/components/directory/BrowseApp";
import AppItem from "@/components/global/AppItem";
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
    const res = await fetch(`${process.env.WEB_SITE}/api/apps/${slug}`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return {
        title: "App not found | Path to Design",
        description: "Explore the best design apps on Path to Design.",
      };
    }

    const app = await res.json();

    const title = `${app.app} | Path to Design`;

    const description = `Discover ${app.app}, an app designers use that's featured on Path to Design.`;

    const canonicalUrl = `https://www.pathtodesign.com/best-design-apps/${slug}`;
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
            alt: `${app.app} on Path to Design`,
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
    console.error("generateMetadata: failed to fetch app metadata:", err);
    return {
      title: "App not found | Path to Design",
      description: "Explore the best design apps on Path to Design.",
    };
  }
}

export async function generateStaticParams() {
  try {
    const apps = await fetch(`${process.env.WEB_SITE}/api/apps`, {
      next: { revalidate: 86400 },
    }).then((res) => res.json());

    return (apps || [])
      .map((app: any) => {
        const slug =
          typeof app.slug === "string"
            ? app.slug
            : typeof app.slug?.slug === "string"
              ? app.slug.slug
              : null;

        return slug ? { slug } : null;
      })
      .filter(Boolean) as { slug: string }[];
  } catch (err) {
    console.error("generateStaticParams: failed to fetch apps:", err);
    return [];
  }
}

export default async function AppDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const app = await fetchSafe(
    `${process.env.WEB_SITE}/api/apps/${slug}`,
    {
      next: { revalidate: 86400 },
    },
    null,
  );

  if (!app) {
    // If the app resource isn't available, show 404.
    notFound();
  }

  // Fetch all apps (fallback to empty array)
  const allApps = await fetchSafe(
    `${process.env.WEB_SITE}/api/apps`,
    {
      next: { revalidate: 86400 },
    },
    [],
  );

  // Filter out the current app and pick a few random ones
  const otherApps = (allApps || [])
    .filter((a: any) => a.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  const booksData = await fetchSafe(
    `${process.env.WEB_SITE}/api/books`,
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
        <BrowseApp app={app} />
        <div className="col-span-2 mt-20 h-fit">
          <div className="mb-6 flex gap-4">
            <div className="text-2xl text-muted-foreground">
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
        {/* TODO: Show when ready */}
        {/* <div className="sticky top-20 flex flex-col gap-8"> */}
        <div className="sticky top-20 hidden flex-col gap-8">
          <NewsletterSidebar designers={designers.length} />
        </div>
      </div>
    </div>
  );
}
