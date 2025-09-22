"use client";

import { companyInfo } from "@/config/companyInfo";
import { mainCTA, menu } from "@/config/navigation";
import Link from "next/link";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <div className="col-span-1 mb-10 h-fit rounded-2xl bg-neutral-900 p-3 text-center md:p-6 xl:col-span-3 xl:mb-40 xl:px-40">
      <h3 className="mb-2 text-xl font-bold md:text-3xl">
        Ready to take the next step?
      </h3>
      <h2 className="mb-8 w-full font-light text-muted-foreground md:text-xl">
        Explore designers, tools, and stories. Or share your path to inspire the
        next generation.
      </h2>
      <div className="flex justify-center gap-4">
        <Link href={mainCTA.href}>
          <Button>{mainCTA.title}</Button>
        </Link>
        <Link href={menu[0].href}>
          <Button variant={"secondary"}>{menu[0].title}</Button>
        </Link>
      </div>
    </div>
  );
}
