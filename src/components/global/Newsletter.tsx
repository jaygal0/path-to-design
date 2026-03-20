"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";

export function Newsletter() {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 rounded-2xl border border-neutral-400 bg-neutral-900 p-4 md:w-1/2 md:flex-row md:p-6">
      <div className="shrink-0">
        <Image
          src="/newsletter/quiz.png"
          alt="Quiz illlustration"
          width={144}
          height={144}
          className="h-56 w-56 object-cover md:h-72 md:w-72"
        />
      </div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        <div>
          <h2 className="mb-2 text-center text-2xl font-bold md:text-left md:text-3xl">
            Find Your Design Path in 60 Seconds
          </h2>
          <p className="text-center font-light text-muted-foreground md:text-left md:text-xl">
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
