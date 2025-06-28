"use client";

import { mainCTA, menu } from "@/config/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="mb-20 flex flex-col gap-2">
      <h1 className="text-5xl font-bold">
        A Directory of Designers, <span className="block">for Designers.</span>
      </h1>
      <h2 className="mb-8 w-1/2 text-2xl font-light text-muted-foreground">
        Explore how designers found their path into the tech industry and get
        inspired to find yours.
      </h2>
      <div className="flex gap-4">
        <Link href={mainCTA.href}>
          <Button>{mainCTA.title}</Button>
        </Link>
        <Link href={menu[0].href}>
          <Button variant={"secondary"}>Browse all</Button>
        </Link>
      </div>
    </div>
  );
}
