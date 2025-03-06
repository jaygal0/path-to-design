import { DesignerDetailBox } from "@/../components/DesignerDetailBox";
import { AppsUsed } from "@/../components/designer/AppsUsed";
import { BooksUsed } from "@/../components/designer/BooksUsed";
import ScrollToTop from "@/../components/global/ScrollToTop";
import prisma from "@/lib/db";
import { shuffle } from "lodash";
import { CardDesigner } from "../../../../../components/CardDesigner";
import { Answers } from "../../../../../components/designer/Answers";
import { Button } from "../../../../../components/global/Button";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers`, {
    next: {
      revalidate: 60,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
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
  const designers = await getData();
  const designer = await fetchDesignerData(params.slug);
  const filteredDesigners = designers.filter(
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
    responsibilites,
    roles,
    stayInspired,
    updatedAt,
    website,
    x,
    profileImage,
    coverImage,
  } = designer;

  return (
    <>
      <ScrollToTop />
      <article className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-min flex-col gap-10 pb-72 md:col-span-6 md:col-start-2 lg:col-start-2 lg:col-end-8 xl:col-start-4 xl:col-end-10">
        <h1 className="mb-20 mt-40 text-4xl font-bold leading-normal md:text-6xl md:leading-tight">
          &quot;{oneLiner}&quot;
        </h1>
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
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={coverImage!}
            alt={`Portfolio cover image of ${firstName} ${lastName}`}
            className="h-full w-full object-cover"
            layout="fill"
          />
        </div>
        <div className="mb-12 flex flex-col gap-12">
          {apps.length > 0 && <AppsUsed apps={apps} />}
          {books.length > 0 && <BooksUsed books={books} />}
          {getStarted && (
            <Answers
              question="How did you get started in your role as a designer?"
              answer={getStarted}
            />
          )}
          {responsibilites && (
            <Answers
              question="What are the responsibilities of your role as a designer?"
              answer={responsibilites}
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
        <h3 className="flex w-full justify-center text-4xl">
          Continue Reading
        </h3>
        {randomDesigners.map((designer: any) => {
          const {
            companies,
            country,
            createdAt,
            firstName,
            id,
            isPublished,
            lastName,
            roles,
            slug,
            updatedAt,
            profileImage,
            coverImage,
          } = designer;

          return (
            <div key={id}>
              {isPublished && (
                <CardDesigner
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
              )}
            </div>
          );
        })}
        <div className="flex w-full py-4 lg:justify-center">
          <Button label="View more" url="/designers" isSecondary />
        </div>
      </article>
    </>
  );
}
