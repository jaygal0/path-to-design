import { Hero } from "@/components/home/Hero";
import { PopularDesigners } from "@/components/home/PopularDesigners";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers`, {
    next: {
      revalidate: 60,
    },
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
      <PopularDesigners designers={designers} />
    </>
  );
}
