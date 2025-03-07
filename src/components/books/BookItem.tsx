"use client";

import Image from "next/image";
import { useState } from "react";
import { Avatar } from "../global/Avatar";

export default function BookItem({ item }: { item: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const { book, author, url, bookCover, designers } = item;

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
              src={bookCover}
              alt={`${book} by ${author}`}
              width={100}
              height={160}
              quality={100}
              className="rounded-lg object-cover transition-all hover:scale-105"
              onError={() => {
                // Handle image error
                const fallbackImage = "/book-fallback.jpg";
                // Update bookCover to fallback image
                book.bookCover = fallbackImage;
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
              Read by {designers.length}{" "}
              {designers.length === 1 ? "designer" : "designers"}
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}
