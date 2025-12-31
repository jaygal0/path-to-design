"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

interface Props {
  designers?: number;
}

export function Newsletter({ designers }: Props) {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 rounded-2xl border border-neutral-400 bg-neutral-900 p-6 md:w-1/2 md:flex-row md:p-6">
      <Image
        src="/path-to-design-logo.png"
        alt="Path to Design Logo"
        width={32}
        height={32}
        quality={70}
        className="hidden h-32 w-32 object-cover md:block"
        sizes="(max-width: 640px) 40px, 80px"
        unoptimized
      />
      <div className="space-y-3">
        <div>
          <h2 className="mb-2 text-2xl md:text-3xl">
            Career clarity for designers in 5 minutes
          </h2>
          <p className="font-light text-muted-foreground md:text-xl">
            See how real designers actually get started and the challenges they
            face, distilled from {designers} experienced designers and counting.
          </p>
        </div>
        <form
          className="flex flex-col"
          action="https://pathtodesign.us17.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="e41d9cf2ed34317e99e5891b9" />
          <input type="hidden" name="id" value="9437e60fa0" />
          <div className="flex items-stretch gap-2">
            <Input
              type="email"
              id="MERGE0"
              name="MERGE0"
              placeholder="Enter your email..."
              className="flex-1"
            />
            <Button type="submit" variant="secondary" className="px-4">
              Get the guide
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
