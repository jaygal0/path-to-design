"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { Avatar } from "./Avatar";
import LogoArrow from "./LogoArrow";

export default function AppItem({ tool }: { tool: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const { app, desc, url, designers } = tool;

  // Shuffle designers only once on mount
  const shuffledDesigners = useMemo(() => {
    return designers
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [designers]);

  return (
    <a
      href={url}
      target="_blank"
      className="plausible-event-name=view-app block"
      data-event-name="view-app"
    >
      <article className="flex h-full flex-col gap-3 rounded-2xl border p-6 transition-all hover:cursor-pointer hover:border-white">
        <div className="flex items-center gap-4">
          <Image
            src={`/apps/${app.toLowerCase().replace(/ /g, "-")}.jpg`}
            alt={app}
            width={32}
            height={32}
            quality={100}
            className="h-8 w-8 rounded-xl transition-all"
            sizes="(max-width: 640px) 40px, 80px"
          />

          <h3
            className={`mb-0 flex-grow text-xl transition-all ${isHovered ? "underline" : ""}`}
          >
            {app}
          </h3>
          <LogoArrow />
        </div>
        <div className="text-muted-foreground">{desc}</div>
        <div className="flex gap-2">
          <div className="flex -space-x-1">
            {shuffledDesigners.map((designer: any) => (
              <Avatar
                key={`${designer.firstName}-${designer.lastName}`}
                firstName={designer.firstName}
                lastName={designer.lastName}
                size="sm"
                profileImage={designer.profileImage}
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground lg:text-base">
            Used by {designers.length}{" "}
            {designers.length === 1 ? "designer" : "designers"}
          </div>
        </div>
      </article>
    </a>
  );
}
