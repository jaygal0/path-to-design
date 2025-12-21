"use client";

import { companyInfo } from "@/config/companyInfo";

export function Hero() {
  return (
    <div className="mx-auto mb-8 w-3/5 space-y-3 text-center">
      <h1 className="text-7xl font-bold">{companyInfo.copy.heading}</h1>
      <h2 className="text-2xl font-extralight text-muted-foreground">
        {companyInfo.copy.subheading}
      </h2>
    </div>
  );
}
