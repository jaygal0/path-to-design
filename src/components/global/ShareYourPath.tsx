"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { mainCTAs } from "@/config/navigation";
import LogoArrow from "./LogoArrow";

export function ShareYourPath() {
  return (
    <Link href={mainCTAs[2].href} className="h-full">
      <div className="just flex h-min gap-3 rounded-2xl border bg-neutral-900 p-3 hover:border-white md:p-6">
        <div className="w-full">
          <h2 className="mb-1 text-lg text-foreground">
            Inspire the Next Generation of Designers
          </h2>
          <p className="text-sm text-muted-foreground">
            Share your path and help others start their design journey.
          </p>
        </div>
        <LogoArrow />
      </div>
    </Link>
  );
}
