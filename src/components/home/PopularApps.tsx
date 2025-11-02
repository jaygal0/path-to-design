"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import AppItem from "../global/AppItem";
import { mainCTAs } from "@/config/navigation";

interface Props {
  apps: any;
}

export function PopularApps({ apps }: Props) {
  return (
    <div className="co-start-3 col-span-1 h-min rounded-2xl bg-neutral-900 p-3 md:p-6">
      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between gap-1">
          <h2 className="text-lg text-foreground">{mainCTAs[3].title}</h2>
          <Link href={mainCTAs[3].href}>
            <Button variant="ghost" className="flex items-center gap-1">
              Explore all <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground md:w-3/4">
          Discover helpful apps that support designers in their careers.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {apps.slice(0, 8).map((tool: any, index: number) => (
          <AppItem key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
}
