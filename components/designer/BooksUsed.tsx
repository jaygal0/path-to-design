"use client";

import { log } from "console";
import Image from "next/image";
import { useState } from "react";

export function BooksUsed({ books }: any) {
  return (
    <div>
      <h3 className="mb-4 font-serif text-2xl text-stone-200">
        What books do you recommend?
      </h3>
      <div className="flex flex-wrap gap-8 gap-y-4">
        {books
          ?.slice() // Create a shallow copy to avoid mutating the original array
          .sort((a: any, b: any) => a.book.localeCompare(b.book)) // Sort alphabetically
          .map((book: any) => {
            console.log(book);

            const [imageSrc, setImageSrc] = useState(book.bookCover);

            const handleImageError = () => {
              setImageSrc("/book-fallback.jpg");
            };

            return (
              <a
                key={book.book}
                className="font-sans font-thin leading-relaxed"
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  key={book.book}
                  className="flex w-[100px] flex-col items-center gap-2 overflow-hidden"
                >
                  <Image
                    src={imageSrc}
                    alt={book.book}
                    width={100}
                    height={160}
                    quality={100}
                    className="rounded-lg object-cover"
                    onError={handleImageError}
                  />
                  <p className="my-0 w-[100px] text-center text-sm capitalize">
                    {book.book}
                  </p>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
}
