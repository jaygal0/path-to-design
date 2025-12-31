"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-3 text-center md:w-4/5">
        <h1 className="text-4xl font-bold md:text-7xl">
          Share your design journey.{" "}
          <span className="block">Help someone find their way.</span>
        </h1>
        <h2 className="pb-8 text-xl font-extralight text-muted-foreground md:text-2xl">
          Path to Design collects honest career stories from experienced
          designers to help people breaking into the industry make better
          decisions, faster.
        </h2>
        <Link href="share-your-path/form">
          <Button variant="secondary" className="w-full md:w-min">
            Start sharing your path
          </Button>
        </Link>
      </div>
    </div>
  );
}
