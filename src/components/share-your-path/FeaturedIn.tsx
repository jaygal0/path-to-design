"use client";

import Image from "next/image";

export function FeaturedIn() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-center text-xl text-muted-foreground">Featured in</h3>
      <div className="mx-auto flex gap-12">
        {/* href="https://www.toools.design/" */}
        <Image
          src="/logos/toools.design.png"
          alt="Tools.Design Logo"
          width={200}
          height={100}
          quality={70}
          className="w-24 rounded-sm object-cover"
          unoptimized
        />
        {/* href="https://uxdesignweekly.com/issue-561/" */}
        <Image
          src="/logos/ux-design-weekly.png"
          alt="uxdesignweekly Logo"
          width={100}
          height={100}
          quality={70}
          className="w-12 rounded-sm object-cover"
          unoptimized
        />

        {/* href="https://tldr.tech/design/2025-10-30" */}
        <Image
          src="/logos/tldr.png"
          alt="TLDR Logo"
          width={200}
          height={100}
          quality={70}
          className="w-24 rounded-sm object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
