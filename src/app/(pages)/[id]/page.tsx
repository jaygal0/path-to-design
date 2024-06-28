import prisma from "@/lib/db";
import { DesignerDetailBox } from "../../../../components/DesignerDetailBox";
import { DetailQuestions } from "../../../../components/DetailQuestions";
import Image from "next/image";
import { Prisma } from "@prisma/client";

// async function getData(id: string) {
//   const res = await fetch(`${process.env.WEB_SITE}/api/${id}`, {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return data;
// }

export default async function Story({ params }: any) {
  // const story = await getData(params.id);

  const designer: Prisma.DesignersCreateInput =
    await prisma.designers.findUnique({
      where: {
        id: params.id,
      },
      include: {
        company: true,
        books: true,
        apps: true,
      },
    });

  const {
    id,
    firstName,
    lastName,
    email,
    twitter,
    instagram,
    dribble,
    url,
    oneLiner,
    role,
    company,
    responsibilites,
    gotStarted,
    advice,
    regrets,
    stayInspired,
    apps,
    books,
    updatedAt,
  } = designer;

  // TODO: Figure out how to join tables together
  // TODO: Connect information from PostGres instead

  // const { id, firstName, lastName, datePosted, contact, info } = story;

  return (
    <div className="flex flex-col gap-10">
      <h1 className="mb-20 mt-40 text-4xl font-bold leading-normal md:text-6xl md:leading-tight">
        &quot;{oneLiner}&quot;
      </h1>
      <DesignerDetailBox
        firstName={firstName}
        lastName={lastName}
        email={email}
        twitter={twitter}
        instagram={instagram}
        dribble={dribble}
        url={url}
        role={role}
        company={company}
      />
      {/* <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          fill
          src="https://dummyimage.com/600x400/000/fff.jpg"
          alt={`An image of ${firstName} ${lastName}'s portfolio`}
          objectFit="cover"
        />
      </div>
      <DetailQuestions
        question="What are the responsibilities of your role as a designer?"
        answer={info.responsibilites}
      />
      <DetailQuestions
        question="How did you get started in your role?"
        answer={info.getStarted}
      />
      <DetailQuestions question="What apps do you use?" apps={info.apps} />
      <DetailQuestions question="What apps do you use?" books={info.books} />
      <DetailQuestions
        question="What advice would you give to your younger self?"
        answer={info.advice}
      />
      <DetailQuestions
        question="Do you have any regrets in your journey in becoming a designer?"
        answer={info.regret}
      />

      <DetailQuestions
        question="How do you stay inspired?"
        answer={info.stayInspired}
      /> */}
    </div>
  );
}
