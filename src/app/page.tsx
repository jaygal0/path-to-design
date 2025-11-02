import { Hero } from "@/components/home/Hero";
import { PopularApps } from "@/components/home/PopularApps";
import { PopularBooks } from "@/components/home/PopularBooks";
import { DesignersPopular } from "@/components/home/DesignersPopular";
import { CTA } from "@/components/home/CTA";
import FaqSection from "@/components/home/FAQSection";
import { NewsletterSidebar } from "@/components/home/NewsletterSidebar";

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
    <>
      <Hero />
      <div className="mb-8 grid grid-cols-1 gap-8 xl:grid-cols-3">
        <DesignersPopular designers={designers} />
        <div className="col-span-1 flex flex-col gap-8 xl:col-start-3 xl:row-start-1">
          <NewsletterSidebar />
          <PopularApps apps={apps} />
        </div>
      </div>
      <PopularBooks books={books} />
      <FaqSection />
      <CTA />
    </>
  );
}
