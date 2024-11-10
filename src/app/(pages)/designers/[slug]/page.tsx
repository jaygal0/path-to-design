import Image from "next/legacy/image";
import { DesignerDetailBox } from "../../../../components/DesignerDetailBox";
import { AppsUsed } from "../../../../components/designer/AppsUsed";
import { BooksUsed } from "../../../../components/designer/BooksUsed";

async function getData(slug: string) {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers/${slug}`, {
    next: {
      revalidate: 60,
    },
  });
  const designer = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return designer;
}

// Static generation for each designer page
export async function generateStaticParams() {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers`);
  const designers = await res.json();

  return designers.map((designer: { slug: string }) => ({
    slug: designer.slug,
  }));
}

export default async function Story({ params }: any) {
  const designer = await getData(params.slug);

  const {
    apps,
    answers,
    books,
    companies,
    countries,
    createdAt,
    dribble,
    email,
    firstName,
    instagram,
    lastName,
    oneLiner,
    roles,
    salaries,
    updatedAt,
    url,
    x,
  } = designer;

  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-min flex-col gap-10 pb-72 md:col-span-6 md:col-start-2 lg:col-start-4 lg:col-end-10">
      <h1 className="mb-20 mt-40 text-4xl font-bold leading-normal md:text-6xl md:leading-tight">
        &quot;{oneLiner}&quot;
      </h1>
      <DesignerDetailBox
        company={companies.company}
        companyURL={companies.url}
        country={countries.country}
        createdAt={createdAt}
        dribble={dribble}
        email={email}
        firstName={firstName}
        instagram={instagram}
        lastName={lastName}
        role={roles.role}
        salary={salaries.salary}
        updatedAt={updatedAt}
        url={url}
        x={x}
      />
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={`/cover-image-${firstName.toLowerCase()}-${lastName.toLowerCase()}.jpg`}
          alt={`An image of ${firstName} ${lastName}'s portfolio`}
          objectFit="cover"
          layout="fill"
          priority
        />
      </div>
      <div className="flex flex-col gap-12">
        {apps.length == 0 ? "" : <AppsUsed apps={apps} />}
        {books.length == 0 ? "" : <BooksUsed books={books} />}
        {answers
          // TODO 2: Figure out why the sorting of the questions are off
          .sort((a: any, b: any) => {
            const dateA = new Date(a.questions[0]?.createdAt || 0);
            const dateB = new Date(b.questions[0]?.createdAt || 0);
            return dateA.getTime() - dateB.getTime();
          })
          .map((answerData: any) => (
            <div key={answerData.id} className="w-full">
              <h3 className="mb-4 font-serif text-2xl text-stone-200">
                {answerData.questions[0]?.question}
              </h3>
              {answerData.answer.map((text: string, index: number) => (
                <p
                  key={index}
                  className="mb-3 font-sans text-lg font-thin leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
