import { DesignerDetailBox } from "@/components/global/DesignerDetailBox";
import { AppsUsed } from "@/components/designer/AppsUsed";
import { BooksUsed } from "@/components/designer/BooksUsed";
import ScrollToTop from "@/components/global/ScrollToTop";
import prisma from "@/lib/db";
import { shuffle } from "lodash";
import { CardDesigner } from "../../../../components/global/CardDesigner";
import { Answers } from "../../../../components/designer/Answers";
import Image from "next/image";
import { PopularApps } from "@/components/home/PopularApps";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetch(`${process.env.WEB_SITE}/api/designers/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return {
      title: "Designer not found | Path to Design",
      description: "Explore designer journeys on Path to Design.",
    };
  }

  const designer = await res.json();
  const {
    firstName,
    lastName,
    oneLiner,
    roles,
    companies,
    coverImage,
    linkedin,
    instagram,
    x,
  } = designer;

  const title = `${firstName} ${lastName}${roles?.role ? ` – ${roles.role}` : ""}${
    companies?.company ? ` at ${companies.company}` : ""
  } | Path to Design`;

  const description =
    oneLiner ||
    `Discover how ${firstName} ${lastName} built their path into design at Path to Design.`;

  const canonicalUrl = `https://www.pathtodesign.com/browse/${slug}`;
  const ogImage = coverImage || "/path-to-design-og-image.jpg";

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Path to Design",
      type: "profile",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${firstName} ${lastName} on Path to Design`,
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
}

async function getData() {
  const [designersRes, appsRes, booksRes] = await Promise.all([
    fetch(`${process.env.WEB_SITE}/api/designers`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.WEB_SITE}/api/apps`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.WEB_SITE}/api/books`, {
      next: { revalidate: 60 },
    }),
  ]);

  if (!designersRes.ok || !appsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [designersData, appsData, booksData] = await Promise.all([
    designersRes.json(),
    appsRes.json(),
    booksRes.json(),
  ]);

  return { designersData, appsData, booksData };
}

async function fetchDesignerData(slug: string) {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

// Pre-generate static paths for designers
export async function generateStaticParams() {
  try {
    const designers = await prisma.designers.findMany({
      select: { slug: true },
    });

    if (!designers || designers.length === 0) {
      throw new Error("No designers found.");
    }

    return designers.map((designer) => ({
      slug: designer.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    throw error;
  }
}

export default async function DesignerPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { designersData, appsData, booksData } = await getData();
  const designer = await fetchDesignerData(params.slug);
  const filteredDesigners = designersData.filter(
    (designer: any) => designer.slug !== params.slug,
  );
  const randomDesigners = shuffle(filteredDesigners).slice(0, 5);

  const {
    advice,
    apps,
    books,
    companies,
    country,
    createdAt,
    difficulties,
    dribbble,
    email,
    firstName,
    getStarted,
    incorporateApps,
    instagram,
    lastName,
    linkedin,
    oneLiner,
    regrets,
    responsibilities,
    roles,
    stayInspired,
    updatedAt,
    website,
    x,
    profileImage,
    coverImage,
  } = designer;

  return (
    <div>
      {oneLiner && (
        <h1 className="mb-20 text-3xl font-bold leading-normal md:text-5xl md:leading-tight lg:w-2/3">
          &quot;{oneLiner}&quot;
        </h1>
      )}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <ScrollToTop />
        <div className="col-span-2 flex flex-col flex-wrap gap-6">
          <DesignerDetailBox
            company={companies.company}
            companyURL={companies.url}
            country={country}
            createdAt={createdAt}
            dribbble={dribbble}
            email={email}
            firstName={firstName}
            instagram={instagram}
            lastName={lastName}
            linkedin={linkedin}
            role={roles.role}
            updatedAt={updatedAt}
            website={website}
            x={x}
            profileImage={profileImage}
          />
          {coverImage && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={coverImage!}
                alt={`Portfolio cover image of ${firstName} ${lastName}`}
                className="h-full w-full object-cover"
                layout="fill"
              />
            </div>
          )}
          <div className="mb-12 flex flex-col gap-12">
            {apps.length > 0 && <AppsUsed apps={apps} />}
            {books.length > 0 && <BooksUsed books={books} />}
            {getStarted && (
              <Answers
                question="How did you get started in your role as a designer?"
                answer={getStarted}
              />
            )}
            {responsibilities && (
              <Answers
                question="What are the responsibilities of your role as a designer?"
                answer={responsibilities}
              />
            )}
            {difficulties && (
              <Answers
                question="What difficulties do you encounter in your role as a designer? "
                answer={difficulties}
              />
            )}
            {incorporateApps && (
              <Answers
                question="How do you incorporate the apps in your design process?"
                answer={incorporateApps}
              />
            )}
            {advice && (
              <Answers
                question="What advice would you give to your younger self trying to get into the field of design?"
                answer={advice}
              />
            )}
            {regrets && (
              <Answers
                question="Do you have any regrets in your journey in becoming a designer?"
                answer={regrets}
              />
            )}
            {stayInspired && (
              <Answers
                question="As a designer how do you stay inspired?"
                answer={stayInspired}
              />
            )}
          </div>
          <div className="col-span-2 h-fit rounded-2xl bg-neutral-900 p-3 md:p-6">
            <div className="mb-6 flex justify-between">
              <div className="text-lg text-muted-foreground">
                Continue reading
              </div>
              <Link href="/browse">
                <Button variant="ghost" className="flex items-center gap-1">
                  See all <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {randomDesigners.map((designer, index: any) => {
                const {
                  companies,
                  country,
                  createdAt,
                  firstName,
                  id,
                  lastName,
                  roles,
                  slug,
                  updatedAt,
                  profileImage,
                  coverImage,
                } = designer;

                return (
                  <CardDesigner
                    key={index}
                    company={companies.company}
                    country={country}
                    createdAt={createdAt}
                    firstName={firstName}
                    id={id}
                    lastName={lastName}
                    role={roles?.role}
                    slug={slug}
                    updatedAt={updatedAt}
                    profileImage={profileImage}
                    coverImage={coverImage}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-8 lg:col-span-1">
          <div className="sticky top-8">
            <PopularApps apps={appsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
