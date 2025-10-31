"use client";

import { mainCTAs } from "@/config/navigation";
import { companyInfo } from "@/config/companyInfo";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-0 lg:mb-20 lg:grid-cols-3 lg:gap-8">
      <div className="col-span-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold md:text-5xl">
            A Directory of Designers,{" "}
            <span className="block">for Designers.</span>
          </h1>
          <h2 className="mb-8 text-lg font-light text-muted-foreground md:w-1/2 md:text-2xl">
            {companyInfo.copy.subheading}
          </h2>
          <div className="flex gap-4">
            <Link href={mainCTAs[1].href}>
              <Button>{mainCTAs[1].title}</Button>
            </Link>
            <Link href={mainCTAs[2].href}>
              <Button variant={"secondary"}>{mainCTAs[2].title}</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-end gap-4">
        <h3 className="mt-16 text-sm text-muted-foreground">As featured in</h3>
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
    </div>
  );
}
