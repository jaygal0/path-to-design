"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Avatar } from "./Avatar";
import { divide } from "lodash";

export default function ProductItem({ item }: { item: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const { name, slug, description, url, designers } = item;

  const [shuffledDesigners, setShuffledDesigners] = useState(
    designers.slice(0, 3),
  );

  useEffect(() => {
    setShuffledDesigners(
      designers
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 3),
    );
  }, [designers]);

  return (
    <a
      href={`/best-design-tools/${slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className="flex w-full flex-col gap-3 rounded-2xl border p-3 hover:cursor-pointer hover:border-white">
        <div className="flex w-full items-center gap-4">
          <Image
            src={`/tools/${slug}.png`}
            alt={name}
            width={200}
            height={200}
            quality={70}
            className="rounded-lg object-cover transition-all hover:scale-105"
          />
          <div className="flex w-full flex-col gap-4">
            <div className="space-y-1">
              <h3 className="mb-0 flex-grow text-lg md:text-xl">{name}</h3>
              {description ? (
                <div className="text-sm text-muted-foreground lg:text-base">
                  {description.length > 0
                    ? `${description.slice(0, 50)}…`
                    : description}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
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
          </div>
        </div>
      </article>
    </a>
  );
}
