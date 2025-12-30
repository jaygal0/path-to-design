"use client";

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

export function Designers({ designers }: Props) {
  const filterNames = [
    "Mørch",
    "Smailey",
    "Paduraru",
    "Kumar",
    "Filou",
    "Galinato",
    "Strasche",
    "Martin",
    "Bölter",
    "Fox",
    "Rogge",
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

  const loopedNames = [...filterNames, ...filterNames];

  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="w-3/5 space-y-3 text-center">
        <h2 className="text-5xl font-bold">
          Designers who have already shared their path
        </h2>
        <p className="text-2xl font-extralight text-muted-foreground">
          {designers.length} designers and counting...
        </p>
      </div>
      <div className="relative mt-14 w-full overflow-hidden">
        <div className="animate-marquee flex w-max items-stretch gap-4">
          {loopedNames.map((name, index) => {
            const designer = designers.find((d: any) => d.lastName === name);
            if (!designer) return null;

            const {
              companies,
              country,
              firstName,
              lastName,
              profileImage,
              roles,
            } = designer;

            const safeRole = roles?.role ?? "Unknown";
            const roleColorClass = getRoleTextColor(safeRole);

            return (
              <div
                key={index}
                className="flex h-72 w-48 flex-col items-center justify-center gap-5 rounded-2xl border border-neutral-700 bg-neutral-900 px-4 py-6 text-center"
              >
                <div className="relative">
                  <Image
                    src={profileImage}
                    alt={`${firstName} ${lastName}`}
                    width={70}
                    height={70}
                    className="relative rounded-full"
                  />
                  <Image
                    src={`/flags/${country}.svg`}
                    width={24}
                    height={24}
                    alt={`${country}`}
                    className="absolute -bottom-2 -right-2 ml-2 inline rounded-full border bg-white"
                    quality={70}
                  />
                </div>

                <div className="text-xl">
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
    </div>
  );
}
