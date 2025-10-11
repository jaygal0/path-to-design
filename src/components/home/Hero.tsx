"use client";

import { mainCTAs } from "@/config/navigation";
import { companyInfo } from "@/config/companyInfo";
import { Button } from "../ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="mb-20 flex flex-col gap-2">
      <h1 className="text-3xl font-bold md:text-5xl">
        A Directory of Designers, <span className="block">for Designers.</span>
      </h1>
      <h2 className="mb-8 text-lg font-light text-muted-foreground md:w-1/2 md:text-2xl">
        {companyInfo.copy.subheading}
      </h2>
      <div className="flex gap-4">
        <Link href={mainCTAs[1].href}>
          <Button>{mainCTAs[1].title}</Button>
        </Link>
        <Link href={mainCTAs[2].href}>
          <Button variant={"secondary"}>{mainCTAs[2].title}</Button>
        </Link>
      </div>
    </div>
  );
}
