import { Hero } from "@/components/home/Hero";
import { PopularApps } from "@/components/home/PopularApps";
import { PopularBooks } from "@/components/home/PopularBooks";
import { RealDesigners } from "@/components/home/DesignersPopular";
import { CTA } from "@/components/home/CTA";
import FaqSection from "@/components/home/FAQSection";
import { Newsletter } from "@/components/global/Newsletter";
import { FeaturedIn } from "@/components/home/FeaturedIn";

async function getData() {
  const [designersRes] = await Promise.all([
    fetch(`${process.env.WEB_SITE}/api/designers`, {
      next: { revalidate: 3600 },
    }),
  ]);

  if (!designersRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [designers] = await Promise.all([designersRes.json()]);

  return { designers };
}

export default async function Home() {
  const { designers } = await getData();

  return (
    <div className="space-y-32">
      <Hero />
      <FeaturedIn />
      <RealDesigners designers={designers} />
      <Newsletter designers={designers.length} />
      <CTA />
    </div>
  );
}
