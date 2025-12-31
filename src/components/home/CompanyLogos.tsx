"use client";

import Image from "next/image";

export function CompanyLogos() {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-center text-lg text-muted-foreground md:text-xl">
        Featured designers have worked at
      </h3>
      <Image
        src="/home/company-logos.png"
        alt="A list of company logos that designers featured on Path to Design have worked for"
        width={200}
        height={100}
        quality={70}
        className="mx-auto w-full object-cover md:w-4/5"
        unoptimized
      />
    </div>
  );
}
