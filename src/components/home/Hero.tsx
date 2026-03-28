"use client";

import { companyInfo } from "@/config/companyInfo";
import Image from "next/image";

interface Props {
  designers: any;
}

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

export function Hero({ designers }: Props) {
  const filterNames = [
    "Smailey",
    "Mørch",
    "Lee",
    "Kumar",
    "Fox",
    "Galinato",
    "Roach",
    "Strasche",
    "Dannaway",
    "Hudock",
    "Rogge",
    "Martin",
    "Paduraru",
    "Bölter",
    "Hansen",
    "Ortega",
    "Molinari",
    "Butler",
    "Arnestad",
    "Yung",
    "Froehlich",
    "Beyers",
    "Oz",
    "Gu",
  ];

  const firstRowNames = filterNames.slice(0, Math.ceil(filterNames.length / 2));
  const secondRowNames = filterNames.slice(Math.ceil(filterNames.length / 2));

  const renderDesignerRow = (names: string[], animationClass: string) => {
    const loopedNames = [...names, ...names];

    return (
      <div className="relative w-full overflow-hidden">
        <div className={`${animationClass} flex w-max items-stretch gap-3 md:gap-4`}>
          {loopedNames.map((name, index) => {
            const designer = designers.find((d: any) => d.lastName === name);
            if (!designer) return null;

            const { companies, country, firstName, lastName, profileImage, roles } =
              designer;

            const safeRole = roles?.role ?? "Unknown";
            const roleColorClass = getRoleTextColor(safeRole);

            return (
              <div
                key={`${name}-${index}`}
                className="flex h-52 w-36 flex-col items-center justify-center gap-3.5 rounded-2xl border border-neutral-700 bg-neutral-900 px-3 py-4.5 text-center md:h-56 md:w-40"
              >
                <div className="relative">
                  <Image
                    src={profileImage}
                    alt={`${firstName} ${lastName}`}
                    width={54}
                    height={54}
                    className="relative rounded-full md:h-[3.75rem] md:w-[3.75rem]"
                  />
                  <Image
                    src={`/flags/${country}.svg`}
                    width={18}
                    height={18}
                    alt={`${country}`}
                    className="absolute -bottom-1.5 -right-1.5 inline rounded-full border bg-white"
                    quality={70}
                  />
                </div>

                <div className="text-[15px] leading-snug md:text-base">
                  <span className={roleColorClass}>{safeRole}</span>
                  {companies?.company && <> at {companies.company}</>}
                </div>
                <div className="text-sm text-muted-foreground">
                  {firstName} {lastName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full space-y-3 text-center md:w-3/5">
        <h1 className="text-4xl font-bold md:text-7xl">
          {companyInfo.copy.heading}
        </h1>
        <h2 className="text-xl font-extralight text-muted-foreground md:text-3xl">
          {companyInfo.copy.subheading}
        </h2>
      </div>
      <div className="mt-14 flex w-full flex-col gap-4">
        {renderDesignerRow(firstRowNames, "animate-marquee")}
        {renderDesignerRow(secondRowNames, "animate-marquee-reverse")}
      </div>
    </div>
  );
}
