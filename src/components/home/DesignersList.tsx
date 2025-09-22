"use client";

import Link from "next/link";
import { CardDesigner } from "../global/CardDesigner";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

interface Props {
  designers: any;
}

export function DesignersList({ designers }: Props) {
  return (
    <div className="col-span-2 h-fit rounded-2xl bg-neutral-900 p-6">
      <div className="mb-6 flex justify-between">
        <div className="text-lg text-muted-foreground">Continue reading</div>
        <Link href="/designers">
          <Button variant="ghost" className="flex items-center gap-1">
            Explore all <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {designers.map(({ designer, index }: any) => {
          const {
            companies,
            country,
            createdAt,
            firstName,
            id,
            isPublished,
            lastName,
            roles,
            slug,
            updatedAt,
            profileImage,
            coverImage,
          } = designer;

          return (
            <>
              {isPublished && (
                <CardDesigner
                  key={index}
                  company={companies.company}
                  country={country}
                  createdAt={createdAt}
                  firstName={firstName}
                  id={id}
                  lastName={lastName}
                  role={roles?.role}
                  slug={slug}
                  updatedAt={updatedAt}
                  profileImage={profileImage}
                  coverImage={coverImage}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
