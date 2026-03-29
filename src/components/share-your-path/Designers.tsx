"use client";

import { DesignersMarquee } from "@/components/global/DesignersMarquee";
import { featuredDesignerLastNames } from "@/config/featuredDesignerLastNames";

interface Props {
  designers: any;
}

export function Designers({ designers }: Props) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="space-y-3 text-center md:w-3/5">
        <h2 className="text-3xl font-bold md:text-5xl">
          We curate experienced designers across product, UX, and many other
          disciplines
        </h2>
        <p className="text-xl font-extralight text-muted-foreground md:text-2xl">
          {designers.length} designers and counting...
        </p>
      </div>
      <DesignersMarquee
        designers={designers}
        names={featuredDesignerLastNames}
        className="mt-14 w-full"
      />
    </div>
  );
}
