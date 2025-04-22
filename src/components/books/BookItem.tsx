"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Avatar } from "../global/Avatar";

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
      <article className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={bookCover}
              alt={`${book} by ${author}`}
              width={100}
              height={160}
              quality={100}
              className="rounded-lg object-cover transition-all hover:scale-105"
              onError={() => {
                // Ideally handle fallback in a more React way — this won't work here
              }}
            />
            <div className="flex flex-col gap-1">
              <h3
                className={`mb-0 text-xl transition-all md:text-2xl lg:text-4xl ${isHovered ? "underline" : ""}`}
              >
                {book}
              </h3>
              <div className="font-sans text-lg text-stone-400">
                by {author}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
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

            <div className="font-sans text-sm lg:text-base">
              Read by {designers.length}{" "}
              {designers.length === 1 ? "designer" : "designers"}
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}
