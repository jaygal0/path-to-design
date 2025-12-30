"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="w-4/5 space-y-3 text-center">
        <h1 className="text-7xl font-bold">
          Share your design journey.{" "}
          <span className="block">Help someone find their way.</span>
        </h1>
        <h2 className="pb-4 text-2xl font-extralight text-muted-foreground">
          Path to Design collects honest career stories from experienced
          designers to help people breaking into the industry make better
          decisions, faster.
        </h2>
        <Link href="share-your-path/form">
          <Button className="w-full md:w-min">Start sharing your path</Button>
        </Link>
      </div>
    </div>
  );
}
