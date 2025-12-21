"use client";

import Image from "next/image";

export function FeaturedIn() {
  return (
    <div className="col-span-1 flex flex-col justify-end gap-4">
      <h3 className="mt-16 text-sm text-muted-foreground">Featured in</h3>
      <div className="flex gap-8">
        <a
          href="https://www.toools.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/toools.design.png"
            alt="Tools.Design Logo"
            width={100}
            height={50}
            quality={70}
            className="rounded-sm object-cover grayscale transition-all duration-500 ease-in-out hover:rounded-none hover:grayscale-0"
            unoptimized
          />
        </a>
        <a
          href="https://tldr.tech/design/2025-10-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/tldr.png"
            alt="TLDR Logo"
            width={100}
            height={50}
            quality={70}
            className="rounded-sm object-cover grayscale transition-all duration-500 ease-in-out hover:rounded-none hover:grayscale-0"
            unoptimized
          />
        </a>
        <a
          href="https://uxdesignweekly.com/issue-561/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/ux-design-weekly.png"
            alt="uxdesignweekly Logo"
            width={50}
            height={50}
            quality={70}
            className="rounded-sm object-cover grayscale transition-all duration-500 hover:rounded-none hover:grayscale-0"
            unoptimized
          />
        </a>
      </div>
    </div>
  );
}
