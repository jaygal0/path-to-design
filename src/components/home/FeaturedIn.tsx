"use client";

import Image from "next/image";

export function FeaturedIn() {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-center text-xl text-muted-foreground">Featured in</h3>
      <div className="mx-auto flex gap-12">
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
