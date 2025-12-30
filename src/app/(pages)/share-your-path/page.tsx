import { Hero } from "@/components/share-your-path/Hero";
import { FeaturedIn } from "@/components/share-your-path/FeaturedIn";
import { Designers } from "@/components/share-your-path/Designers";
import { CTA } from "@/components/share-your-path/CTA";

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
      <Designers designers={designers} />
      <CTA />
    </div>
  );
}
