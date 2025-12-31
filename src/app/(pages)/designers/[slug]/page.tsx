import { DesignerDetailBox } from "@/components/global/DesignerDetailBox";
import { AppsUsed } from "@/components/designer/AppsUsed";
import { BooksUsed } from "@/components/designer/BooksUsed";
import ScrollToTop from "@/components/global/ScrollToTop";
import prisma from "@/lib/db";
import { shuffle } from "lodash";
import { CardDesigner } from "../../../../components/global/CardDesigner";
import { Answers } from "../../../../components/designer/Answers";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { ProductsUsed } from "@/components/designer/ProductsUsed";
import { notFound } from "next/navigation";
import { mainCTAs } from "@/config/navigation";
import { fetchSafe } from "@/lib/fetchSafe";
import { NewsletterSidebar } from "@/components/global/NewsletterSidebar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await fetch(`${process.env.WEB_SITE}/api/designers/${slug}`, {
      next: { revalidate: 604800 },
    });

    if (!res.ok) {
      return {
        title: "Designer not found | Path to Design",
        description: "Explore designer careers on Path to Design.",
      };
    }

    const designer = await res.json();
    const { firstName, lastName, oneLiner, roles, companies, coverImage } =
      designer;

    const title = `${firstName} ${lastName}${roles?.role ? ` – ${roles.role}` : ""}
${companies?.company ? ` at ${companies.company}` : ""} | Path to Design`;

    const description =
      oneLiner ||
      `Discover how ${firstName} ${lastName} built their career path into design at Path to Design.`;

    const canonicalUrl = `https://www.pathtodesign.com/designers/${slug}`;
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
  } catch (err) {
    console.error("generateMetadata: failed to fetch designer metadata:", err);
    return {
      title: "Designer not found | Path to Design",
      description: "Explore designer careers on Path to Design.",
    };
  }
}

async function getData() {
  const designersData = await fetchSafe(
    `${process.env.WEB_SITE}/api/designers`,
    {
      next: { revalidate: 604800 },
    },
    [],
  );

  const appsData = await fetchSafe(
    `${process.env.WEB_SITE}/api/apps`,
    {
      next: { revalidate: 604800 },
    },
    [],
  );

  return { designersData, appsData };
}

async function fetchDesignerData(slug: string) {
  const designer = await fetchSafe(
    `${process.env.WEB_SITE}/api/designers/${slug}`,
    {
      next: { revalidate: 604800 },
    },
    null,
  );

  if (!designer || designer.isPublished !== true) {
    notFound();
  }

  return designer;
}

// Pre-generate static paths for designers
export async function generateStaticParams() {
  try {
    const designers = await prisma.designers.findMany({
      where: { isPublished: true },
      select: { slug: true },
    });

    return (designers || []).map((designer) => ({
      slug: designer.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function DesignerPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  // getData() may fail if the API is unreachable during build (ECONNREFUSED).
  // Protect the build by falling back to empty arrays and logging the error.
  let designersData: any[] = [];
  let appsData: any[] = [];

  try {
    const data = await getData();
    designersData = data.designersData || [];
    appsData = data.appsData || [];
  } catch (err) {
    console.error(
      "DesignerPage: getData failed, falling back to empty arrays:",
      err,
    );
  }

  const designer = await fetchDesignerData(params.slug);

  const filteredDesigners = designersData.filter(
    (designer: any) => designer.slug !== params.slug,
  );
  const randomDesigners = shuffle(filteredDesigners).slice(0, 8);

  const {
    advice,
    apps,
    books,
    products,
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
            company={companies?.company || ""}
            companyURL={companies?.url || ""}
            country={country}
            createdAt={createdAt}
            dribbble={dribbble}
            email={email}
            firstName={firstName}
            instagram={instagram}
            lastName={lastName}
            linkedin={linkedin}
            role={roles?.role || ""}
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
                quality={70}
              />
            </div>
          )}
          <div className="mb-12 flex flex-col gap-12">
            {apps.length > 0 && <AppsUsed apps={apps} />}
            {books.length > 0 && <BooksUsed books={books} />}
            {products?.length > 0 && <ProductsUsed product={products} />}
            {/* TODO: Show when ready */}
            {/* <div className="block md:hidden"> */}
            <div className="hidden md:hidden">
              <NewsletterSidebar designers={designersData.length} />
            </div>
            {getStarted && (
              <Answers
                question="How did you get started in your role?"
                answer={getStarted}
              />
            )}
            {responsibilities && (
              <Answers
                question="What are the responsibilities of your role?"
                answer={responsibilities}
              />
            )}
            {difficulties && (
              <Answers
                question="What difficulties do you encounter in your role?"
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
          <div className="col-span-2 h-fit rounded-2xl">
            <div className="mb-6 flex justify-between">
              <div className="text-lg text-muted-foreground">
                Continue reading
              </div>
              <Link href={mainCTAs[1].href}>
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
                  isPublished,
                } = designer;

                return (
                  isPublished && (
                    <CardDesigner
                      key={index}
                      company={companies?.company || ""}
                      country={country}
                      createdAt={createdAt}
                      firstName={firstName}
                      id={id}
                      lastName={lastName}
                      role={roles?.role || ""}
                      slug={slug}
                      updatedAt={updatedAt}
                      profileImage={profileImage}
                      coverImage={coverImage}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-2 hidden md:block lg:col-span-1">
          {/* TODO: Show when ready */}
          {/* <div className="sticky top-80 flex flex-col gap-8"> */}

          <div className="sticky top-80 hidden flex-col gap-8">
            <NewsletterSidebar designers={designersData.length} />
          </div>
        </div>
      </div>
    </div>
  );
}
