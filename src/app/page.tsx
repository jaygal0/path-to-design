import { Hero } from "@/components/home/Hero";
import { PopularApps } from "@/components/home/PopularApps";
import { PopularBooks } from "@/components/home/PopularBooks";
import { PopularDesigners } from "@/components/home/PopularDesigners";

async function getData() {
  const [designersRes, appsRes, booksRes] = await Promise.all([
    fetch(`${process.env.WEB_SITE}/api/designers`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.WEB_SITE}/api/apps`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.WEB_SITE}/api/books`, {
      next: { revalidate: 60 },
    }),
  ]);

  if (!designersRes.ok || !appsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [designers, apps, books] = await Promise.all([
    designersRes.json(),
    appsRes.json(),
    booksRes.json(),
  ]);

  return { designers, apps, books };
}

export default async function Home() {
  const { designers, apps, books } = await getData();

  return (
    <>
      <Hero />
      <div className="flex flex-wrap gap-6">
        <PopularDesigners designers={designers} />
        <PopularApps apps={apps} />
        <PopularBooks books={books} />
      </div>
    </>
  );
}
