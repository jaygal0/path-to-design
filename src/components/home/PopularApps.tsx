"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import AppItem from "../apps/AppItem";

export function PopularApps({ apps }: any) {
  const filterNames = ["Joshua", "Shannel", "Meghan", "Florian", "Vivek"]; // Select which designers to present on the first page

  return (
    <div className="w-1/3 rounded-2xl bg-neutral-900 p-6">
      <div className="mb-6 flex justify-between">
        <div className="text-lg text-muted-foreground">
          Popular apps used by designers
        </div>
        <Link href="/designers">
          <Button variant="ghost" className="flex items-center gap-1">
            See all <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {apps.slice(0, 4).map((tool: any, index: number) => (
          <AppItem key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
}
