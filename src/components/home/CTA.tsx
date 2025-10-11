"use client";

import { mainCTAs, menu } from "@/config/navigation";
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
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link href={mainCTAs[1].href}>
          <Button className="w-full md:w-min">{mainCTAs[1].title}</Button>
        </Link>
        <Link href={mainCTAs[2].href}>
          <Button variant={"secondary"} className="w-full sm:w-min">
            {mainCTAs[2].title}
          </Button>
        </Link>
      </div>
    </div>
  );
}
