"use client";

import Image from "next/image";
import { useState } from "react";
import { Avatar } from "../global/Avatar";

export default function AppItem({ tool }: { tool: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const { app, desc, url, designers } = tool;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block"
    >
      <article className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={`/apps/${app.toLowerCase().replace(/ /g, "-")}.jpg`}
              alt={app}
              width={80}
              height={80}
              quality={100}
              className={`rounded-xl transition-all ${isHovered ? "scale-105" : ""} h-10 w-10 sm:h-20 sm:w-20`}
              sizes="(max-width: 640px) 40px, 80px"
            />

            <h3
              className={`mb-0 text-xl transition-all md:text-2xl lg:text-4xl ${isHovered ? "underline" : ""}`}
            >
              {app}
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex -space-x-1">
              {designers
                // Create a copy before shuffling to avoid mutating original array
                .slice()
                // Proper Fisher-Yates shuffle implementation
                .sort(() => Math.random() - 0.5)
                // Take first 3 designers after shuffling
                .slice(0, 3)
                // Map with proper unique keys
                .map((designer: any) => (
                  <Avatar
                    key={`${designer.firstName}-${designer.lastName}`}
                    firstName={designer.firstName}
                    lastName={designer.lastName}
                    size="sm"
                    profileImage={designer.profileImage}
                  />
                ))}
            </div>

            <div className="font-sans text-sm lg:text-base">
              Used by {designers.length}{" "}
              {designers.length === 1 ? "designer" : "designers"}
            </div>
          </div>
        </div>
        <div className="font-sans text-stone-400">{desc}</div>
      </article>
    </a>
  );
}
