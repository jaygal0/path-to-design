import { Hero } from "@/components/home/Hero";
import { PopularApps } from "@/components/home/PopularApps";
import { PopularBooks } from "@/components/home/PopularBooks";
import { DesignersPopular } from "@/components/home/DesignersPopular";

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
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <DesignersPopular designers={designers} />
        <PopularApps apps={apps} />
        <PopularBooks books={books} />
      </div>
    </>
  );
}
