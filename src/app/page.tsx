import prisma from "@/lib/db";
import { CardDesigner } from "../../components/CardDesigner";
import { Hero } from "../../components/Hero";

export default async function Home() {
  const designers = await prisma.designers.findMany({
    include: {
      company: true,
    },
    orderBy: { createdAt: "asc" },
  });

  return (
    <>
      <Hero />
      <div className="flex flex-col gap-6">
        {designers.map((designer: any, index: any) => {
          const { id, firstName, lastName, slug, role, company, updatedAt } =
            designer;
          return (
            <CardDesigner
              key={id}
              id={id}
              index={index}
              firstName={firstName}
              lastName={lastName}
              role={role}
              slug={slug}
              company={company.name}
              updatedAt={updatedAt}
            />
          );
        })}
      </div>
    </>
  );
}
