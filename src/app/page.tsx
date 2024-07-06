import { CardDesigner } from "../../components/CardDesigner";
import { Hero } from "../../components/Hero";

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
      <div className="flex flex-col gap-8">
        {designers.map((designer: any, index: any) => {
          const {
            companies,
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
            <>
              {isPublished && (
                <CardDesigner
                  company={companies.company}
                  firstName={firstName}
                  id={id}
                  index={index}
                  key={index}
                  lastName={lastName}
                  role={roles.role}
                  salary={salaries.salary}
                  slug={slug}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                />
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
