import { Hero } from "@/components/home/Hero";
import { RealDesigners } from "@/components/home/RealDesigners";
import { CTA } from "@/components/home/CTA";
import { Newsletter } from "@/components/global/Newsletter";
import { CompanyLogos } from "@/components/home/CompanyLogos";
import { RealRecommendations } from "@/components/home/RealRecommendations";

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
    <div className="space-y-32 md:space-y-52">
      <Hero designers={designers} />
      <CompanyLogos />
      <RealDesigners designers={designers} />
      {/* TODO: Show when ready */}
      {/* <Newsletter designers={designers.length} /> */}
      <RealRecommendations />
      <CTA />
    </div>
  );
}
