"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <div className="mb-10 rounded-2xl bg-neutral-900 p-8 text-center md:p-20">
      <h3 className="mb-2 text-3xl font-bold md:text-4xl">
        It takes a few minutes.{" "}
        <span className="block">Your impact lasts much longer.</span>
      </h3>
      <p className="mb-8 w-full text-lg font-light text-muted-foreground md:text-xl">
        Share your journey and inspire the next generation of designers.
      </p>
      <Link href="share-your-path/form">
        <Button className="w-full md:w-min">Share your path</Button>
      </Link>
    </div>
  );
}
