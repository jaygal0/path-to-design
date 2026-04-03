"use client";

import { DesignersMarquee } from "@/components/global/DesignersMarquee";
import { featuredDesignerLastNames } from "@/config/featuredDesignerLastNames";
import { companyInfo } from "@/config/companyInfo";

interface Props {
  designers: any;
}

export function Hero({ designers }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full space-y-3 text-center md:w-3/5">
        <h1 className="text-4xl font-bold capitalize md:mx-auto md:text-7xl">
          {companyInfo.copy.heading}
        </h1>
        <h2 className="text-xl font-extralight text-muted-foreground md:text-3xl">
          {companyInfo.copy.subheading}
        </h2>
      </div>
      <DesignersMarquee
        designers={designers}
        names={featuredDesignerLastNames}
        className="mt-14 w-full"
      />
    </div>
  );
}
