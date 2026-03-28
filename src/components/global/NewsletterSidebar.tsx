"use client";

import Link from "next/link";

import { Button } from "../ui/button";
import { SharePageActions } from "./SharePageActions";

interface Props {
  designers?: number;
}

export function NewsletterSidebar(_: Props) {
  return (
    <div className="mx-auto space-y-4">
      <div className="flex items-center gap-4 rounded-2xl border border-neutral-400 bg-neutral-900 p-3 md:p-6">
        <div className="space-y-3">
          <div>
            <h2 className="mb-2 text-xl font-bold md:text-2xl">
              Find Your Design Path in 60 Seconds
            </h2>
            <p className="font-light text-muted-foreground md:text-lg">
              Answer 5 quick questions and discover which design role fits your
              skills.
            </p>
          </div>
          <Button asChild variant="default" className="px-4">
            <Link href="/design-career-quiz">Start the quiz</Link>
          </Button>
        </div>
      </div>
      <SharePageActions />
    </div>
  );
}
