import { CardDesigner } from "../../components/CardDesigner";
import { Hero } from "../../components/home/Hero";
import { CalloutMain } from "../../components/home/CalloutMain";
import { CalloutAlt } from "../../components/home/CalloutAlt";
import { NewsletterFormBox } from "../../components/global/NewsletterFormBox";
import Section from "../../components/global/Section";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

export default async function Home() {
  const designers = await getData();

  return (
    <>
      <Hero />
      <CalloutMain />
      <NewsletterFormBox />
      <CalloutAlt />
      <Section>
        <div className="col-start-2 col-end-10 flex flex-col gap-8">
          {designers.map((designer: any, index: any) => {
            const {
              companies,
              countries,
              createdAt,
              firstName,
              id,
              isPublished,
              lastName,
              roles,
              salaries,
              slug,
              updatedAt,
            } = designer;
            return (
              <div key={id}>
                {isPublished && (
                  <CardDesigner
                    company={companies.company}
                    country={countries.country}
                    createdAt={createdAt}
                    firstName={firstName}
                    id={id}
                    lastName={lastName}
                    role={roles.role}
                    salary={salaries.salary}
                    slug={slug}
                    updatedAt={updatedAt}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
