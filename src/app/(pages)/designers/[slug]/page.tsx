import { DesignerDetailBox } from "../../../../../components/DesignerDetailBox";
import { DetailQuestions } from "../../../../../components/DetailQuestions";
import Image from "next/image";

async function getData(slug: string) {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers/${slug}`, {
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
          src={`/cover-image-${firstName.toLowerCase()}-${lastName.toLowerCase()}.jpg`}
          alt={`An image of ${firstName} ${lastName}'s portfolio`}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-12">
        {gotStarted && (
          <DetailQuestions
            question="How did you get started in your role as a designer?"
            answer={gotStarted}
          />
        )}
        {responsibilites && (
          <DetailQuestions
            question="What are the responsibilities of your role as a designer?"
            answer={responsibilites}
          />
        )}

        {apps.length == 0 ? (
          ""
        ) : (
          <DetailQuestions
            question="What apps do you use to help you design?"
            apps={apps}
          />
        )}
        {appExplained && (
          <DetailQuestions
            question="How do you use these apps in your design process?"
            answer={appExplained}
          />
        )}
        {books.length == 0 ? (
          ""
        ) : (
          <DetailQuestions
            question="What books have you read that helped you get to where you are now?"
            books={books}
          />
        )}
        {booksExplained && (
          <DetailQuestions
            question="How have these books helped you in your path to design?"
            answer={booksExplained}
          />
        )}
        {advice && (
          <DetailQuestions
            question="What advice would you give to your younger self trying to get into the field of design?"
            answer={advice}
          />
        )}
        {regrets && (
          <DetailQuestions
            question="Do you have any regrets in your journey in becoming a designer?"
            answer={regrets}
          />
        )}
        {stayInspired && (
          <DetailQuestions
            question="As a designer, how do you stay inspired?"
            answer={stayInspired}
          />
        )}
      </div>
    </div>
  );
}
