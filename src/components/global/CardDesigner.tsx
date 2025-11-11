"use client";

import Link from "next/link";
import { Suspense } from "react";
import { DesignerProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

// Color palette for text (15 colors)
const roleTextColors = [
  "text-pink-400",
  "text-red-400",
  "text-indigo-400",
  "text-blue-400",
  "text-yellow-400",
  "text-purple-400",
  "text-green-400",
  "text-teal-400",
  "text-cyan-400",
  "text-emerald-400",
  "text-orange-400",
  "text-rose-400",
  "text-lime-400",
  "text-fuchsia-400",
  "text-violet-400",
];

// Deterministic hashing function to assign color by role
function getRoleTextColor(role: string) {
  const index =
    role.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    roleTextColors.length;
  return roleTextColors[index];
}

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
  const safeRole = role ?? "Unknown";
  const roleColorClass = getRoleTextColor(safeRole);

  return (
    <Suspense fallback={"Loading..."}>
      <Link href={`/designers/${slug}`}>
        <article className="flex h-full flex-col gap-3 rounded-2xl border p-6 transition-all hover:border-white">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={profileImage}
                alt={`Profile image of ${firstName} ${lastName}`}
              />
              <AvatarFallback>{firstName.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <h3 className="flex-grow text-xl md:text-3xl">
              {firstName} {lastName}
            </h3>
            <Image
              src={`/flags/${country}.svg`}
              width={24}
              height={24}
              alt={`${country}`}
              className="ml-2 inline"
              quality={70}
            />
          </div>

          <div className="text-base font-light md:text-xl">
            <span className={roleColorClass}>{role}</span>{" "}
            <span className="text-base md:text-xl">at {company}</span>
          </div>
          <div
            className="overflow-hidden text-ellipsis text-muted-foreground"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {oneLiner}
          </div>
        </article>
      </Link>
    </Suspense>
  );
}
