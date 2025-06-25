import AppItem from "@/components/apps/AppItem";
import { Hero } from "@/components/home/Hero";
import { PopularDesigners } from "@/components/home/PopularDesigners";

async function getData() {
  const [designersRes, appsRes] = await Promise.all([
    fetch(`${process.env.WEB_SITE}/api/designers`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.WEB_SITE}/api/apps`, {
      next: { revalidate: 60 },
    }),
  ]);

  if (!designersRes.ok || !appsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [designers, apps] = await Promise.all([
    designersRes.json(),
    appsRes.json(),
  ]);

  return { designers, apps };
}

export default async function Home() {
  const { designers, apps } = await getData();

  return (
    <>
      <Hero />
      <div className="flex">
        <PopularDesigners designers={designers} />
        <div className="flex flex-col gap-14">
          {apps.map((tool: any, index: number) => (
            <AppItem key={index} tool={tool} />
          ))}
        </div>
      </div>
    </>
  );
}
