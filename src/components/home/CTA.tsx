"use client";

import { mainCTAs, menu } from "@/config/navigation";
import Link from "next/link";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <div className="mb-10 rounded-2xl bg-neutral-900 p-20 text-center">
      <h3 className="mb-2 font-bold md:text-4xl">
        Still figuring out your design path?
      </h3>
      <h2 className="mb-8 w-full font-light text-muted-foreground md:text-xl">
        Explore real design careers and see what&apos;s possible.
      </h2>
      <Link href={mainCTAs[1].href}>
        <Button className="w-full md:w-min">{mainCTAs[1].title}</Button>
      </Link>
    </div>
  );
}
