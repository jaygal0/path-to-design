import { Hero } from "@/components/home/Hero";
import { PopularApps } from "@/components/home/PopularApps";
import { PopularBooks } from "@/components/home/PopularBooks";
import { RealDesigners } from "@/components/home/DesignersPopular";
import { CTA } from "@/components/home/CTA";
import FaqSection from "@/components/home/FAQSection";
import { Newsletter } from "@/components/global/Newsletter";
import { FeaturedIn } from "@/components/home/FeaturedIn";

async function getData() {
  const [designersRes, appsRes, booksRes] = await Promise.all([
    fetch(`${process.env.WEB_SITE}/api/designers`, {
      next: { revalidate: 3600 },
    }),
    fetch(`${process.env.WEB_SITE}/api/apps`, {
      next: { revalidate: 3600 },
    }),
    fetch(`${process.env.WEB_SITE}/api/books`, {
      next: { revalidate: 3600 },
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
    <div className="space-y-20">
      <Hero />
      <FeaturedIn />
      <RealDesigners designers={designers} />
      <Newsletter designers={designers.length} />
      <PopularApps apps={apps} />
      <PopularBooks books={books} />
      <CTA />
    </div>
  );
}
