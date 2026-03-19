"use client";

import Link from "next/link";

import { Button } from "../ui/button";

export function Newsletter() {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 rounded-2xl border border-neutral-400 bg-neutral-900 p-6 md:w-1/2 md:flex-row md:p-6">
      <div className="space-y-3">
        <div>
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">
            Find Your Design Path in 60 Seconds
          </h2>
          <p className="font-light text-muted-foreground md:text-xl">
            Answer 5 quick questions and discover which design role fits your
            skills.
          </p>
        </div>
        <Button asChild variant="default" className="px-4">
          <Link href="/design-career-quiz">Start the quiz</Link>
        </Button>
      </div>
    </div>
  );
}
