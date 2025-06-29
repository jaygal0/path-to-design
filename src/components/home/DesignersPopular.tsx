"use client";

import Link from "next/link";
import { CardDesigner } from "../global/CardDesigner";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

interface Props {
  designers: any;
  slice?: number;
}

export function DesignersPopular({ designers, slice }: Props) {
  const filterNames = [
    "Joshua",
    "Shannel",
    "Meghan",
    "Florian",
    "Vivek",
    "Nizar",
    "Eriol",
  ]; // Select which designers to present on the first page

  return (
    <div className="col-span-1 h-fit rounded-2xl bg-neutral-900 p-6 xl:col-span-2">
      <div className="mb-6 flex justify-between">
        <div className="text-lg text-muted-foreground">Popular designers</div>
        <Link href="/browse">
          <Button variant="ghost" className="flex items-center gap-1">
            See all <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {designers
          .filter((designer: any) => filterNames.includes(designer.firstName))
          .map((designer: any, index: any) => {
            const {
              companies,
              country,
              coverImage,
              firstName,
              isPublished,
              lastName,
              oneLiner,
              profileImage,
              roles,
              slug,
            } = designer;

            return (
              <CardDesigner
                key={index}
                company={companies.company}
                country={country}
                coverImage={coverImage}
                firstName={firstName}
                lastName={lastName}
                oneLiner={oneLiner}
                profileImage={profileImage}
                role={roles?.role}
                slug={slug}
              />
            );
          })}
      </div>
    </div>
  );
}
