import { CardDesigner } from "../components/global/CardDesigner";
import Image from "next/image";
import { Button } from "../components/global/Button";
import LogoMouse from "@/components/home/LogoMouse";
import { Hero } from "@/components/home/Hero";
import { Understand } from "@/components/home/Understand";
import { WeBuilt } from "@/components/home/WeBuilt";
import { EssentialApps } from "@/components/home/EssentialApps";
import { BooksThatInspire } from "@/components/home/BooksThatInspire";
import { DiscoverApps } from "@/components/home/DiscoverApps";
import { TakeCharge } from "@/components/home/TakeCharge";
import { StartExploring } from "@/components/home/StartExploring";

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
      <Understand />
      <WeBuilt />
      <EssentialApps />
      <BooksThatInspire />
      <DiscoverApps />
      <TakeCharge />
      <StartExploring designers={designers} />
      <LogoMouse />
    </>
  );
}
