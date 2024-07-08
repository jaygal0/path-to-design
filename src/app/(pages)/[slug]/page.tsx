import { DesignerDetailBox } from "../../../../components/DesignerDetailBox";
import { DetailQuestions } from "../../../../components/DetailQuestions";
import Image from "next/image";

async function getData(slug: string) {
  const res = await fetch(`${process.env.WEB_SITE}/api/${slug}`, {
    cache: "no-store",
  });
  const designer = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return designer;
}

export default async function Story({ params }: any) {
  const designer = await getData(params.slug);

  const {
    advice,
    appExplained,
    apps,
    books,
    booksExplained,
    companies,
    countries,
    createdAt,
    dribble,
    email,
    firstName,
    gotStarted,
    id,
    instagram,
    lastName,
    oneLiner,
    regrets,
    responsibilites,
    roles,
    salaries,
    stayInspired,
    updatedAt,
    url,
    x,
  } = designer;

  return (
    <div className="flex flex-col gap-10">
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
          fill
          src="https://dummyimage.com/600x400/000/fff.jpg"
          alt={`An image of ${firstName} ${lastName}'s portfolio`}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-16">
        <DetailQuestions
          question="What are the responsibilities of your role as a designer?"
          answer={responsibilites}
        />
        <DetailQuestions
          question="How did you get started in your role?"
          answer={gotStarted}
        />
        <DetailQuestions
          question="What apps do you use to help you design?"
          apps={apps}
        />
        <DetailQuestions
          question="How do you incorporate these apps to you designs?"
          answer={appExplained}
        />
        <DetailQuestions
          question="What books do you recommend?"
          books={books}
        />
        <DetailQuestions
          question="Why do you recommend these books?"
          answer={booksExplained}
        />
        <DetailQuestions
          question="What advice would you give to your younger self?"
          answer={advice}
        />
        <DetailQuestions
          question="Do you have any regrets in your journey in becoming a designer?"
          answer={regrets}
        />

        <DetailQuestions
          question="How do you stay inspired?"
          answer={stayInspired}
        />
      </div>
    </div>
  );
}
