"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Avatar } from "../global/Avatar";
import LogoArrow from "../global/LogoArrow";

export default function BookItem({ item }: { item: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const { book, author, url, bookCover, designers } = item;

  // Shuffle designers only once on component mount
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
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="plausible-event-name=view-book block"
    >
      <article className="flex h-full w-full flex-col gap-3 rounded-2xl border p-6">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-4">
            <Image
              src={bookCover}
              alt={`${book} by ${author}`}
              width={100}
              height={160}
              quality={100}
              className="rounded-lg object-cover transition-all hover:scale-105"
            />
            <div className="flex w-full flex-col gap-4">
              <div className="flex">
                <h3
                  className={`mb-0 flex-grow text-xl transition-all ${isHovered ? "underline" : ""}`}
                >
                  {book}
                </h3>
                <LogoArrow />
              </div>
              <div className="font-sans text-lg text-stone-400">
                by {author}
              </div>
              <div className="flex gap-3">
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
                  Read by {designers.length}{" "}
                  {designers.length === 1 ? "designer" : "designers"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}
