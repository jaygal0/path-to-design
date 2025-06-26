"use client";

import Link from "next/link";
import { Suspense } from "react";
import { DesignerProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

export function CardDesigner({
  company,
  firstName,
  lastName,
  role,
  slug,
  country,
  profileImage,
  oneLiner,
}: DesignerProps) {
  return (
    <Suspense fallback={"Loading..."}>
      <Link href={`/browse/${slug}`}>
        <article className="flex flex-col gap-3 rounded-2xl border p-6">
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src={profileImage} />
              <AvatarFallback>{firstName.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <h2 className="flex-grow text-3xl">
              {firstName} {lastName}
            </h2>
            <Image
              src={`/flags/${country}.svg`}
              width={24}
              height={24}
              alt={`${country}`}
              className="ml-2 inline"
            />
          </div>
          <div className="text-xl">
            {role} at {company}
          </div>
          <div className="text-muted-foreground">{oneLiner}</div>
        </article>
      </Link>
    </Suspense>
  );
}
