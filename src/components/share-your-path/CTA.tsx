"use client";

import { mainCTAs, menu } from "@/config/navigation";
import Link from "next/link";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <div className="mb-10 rounded-2xl bg-neutral-900 p-20 text-center">
      <h3 className="mb-2 font-bold md:text-4xl">
        It takes a few minutes.{" "}
        <span className="block">Your impact lasts much longer.</span>
      </h3>
      <p className="mb-8 w-full font-light text-muted-foreground md:text-xl">
        You are helping someone who feels stuck today.
      </p>
      <Link href="share-your-path/form">
        <Button className="w-full md:w-min">Share your path</Button>
      </Link>
    </div>
  );
}
