"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-3 text-center md:w-4/5">
        <h1 className="text-4xl font-bold md:text-7xl">
          Shape how the next generation enters design
        </h1>
        <h2 className="mx-auto pb-8 text-xl font-extralight text-muted-foreground md:w-3/4 md:text-2xl">
          Path to Design collects honest career stories from experienced
          designers to help people break into the industry.
        </h2>
        <Link href="share-your-path/form">
          <Button className="w-full md:w-min">
            Share your path
          </Button>
        </Link>
      </div>
    </div>
  );
}
