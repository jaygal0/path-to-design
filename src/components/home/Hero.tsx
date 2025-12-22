"use client";

import { companyInfo } from "@/config/companyInfo";
import { first } from "lodash";
import Image from "next/image";

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

interface Props {
  designers: any;
}

export function Hero({ designers }: Props) {
  const filterNames = [
    "Galinato",
    "Strasche",
    "Kumar",
    "Paduraru",
    "Oz",
    "Fox",
    "Arnestad",
    "Mørch",
    "Smailey",
    "Bölter",
  ];

  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="w-3/5 space-y-3 text-center">
        <h1 className="text-7xl font-bold">{companyInfo.copy.heading}</h1>
        <h2 className="text-2xl font-extralight text-muted-foreground">
          {companyInfo.copy.subheading}
        </h2>
      </div>
      <div className="mt-10 flex items-center justify-center gap-4">
        {filterNames.map((name, index) => {
          const designer = designers.find((d: any) => d.lastName === name);
          if (!designer) return null;

          const {
            companies,
            country,
            coverImage,
            firstName,
            lastName,
            oneLiner,
            profileImage,
            roles,
            slug,
          } = designer;

          const safeRole = roles?.role ?? "Unknown";
          const roleColorClass = getRoleTextColor(safeRole);

          return (
            <div
              key={index}
              className="flex h-full w-40 flex-col items-center gap-3 rounded-2xl border px-4 py-8 text-center"
            >
              <Image
                src={profileImage}
                alt={`${firstName} ${lastName}`}
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="text-sm text-muted-foreground">
                <span className={roleColorClass}>{safeRole}</span>
                {companies?.company && <> at {companies.company}</>}
              </div>
              <div>
                {firstName} {lastName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
