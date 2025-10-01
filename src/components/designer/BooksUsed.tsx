"use client";

import Image from "next/image";

export function BooksUsed({ books }: any) {
  return (
    <div>
      <h3 className="mb-4 text-xl text-muted-foreground">
        What books do you recommend?
      </h3>
      <div className="mb-8 flex flex-wrap gap-8 gap-y-4">
        {books
          ?.slice() // Create a shallow copy to avoid mutating the original array
          .sort((a: any, b: any) => a.book.localeCompare(b.book)) // Sort alphabetically
          .map((book: any, index: number) => {
            return (
              <a
                key={book.book}
                className="leading-relaxed text-muted-foreground"
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  key={book.book}
                  className="flex w-[100px] flex-col items-center gap-2"
                >
                  <Image
                    src={book.bookCover} // Directly use bookCover from the sorted books
                    alt={book.book}
                    width={100}
                    height={160}
                    quality={100}
                    className="rounded-lg object-cover transition-all hover:scale-105"
                    onError={() => {
                      // Handle image error
                      const fallbackImage = "/books/fallback.jpg";
                      // Update bookCover to fallback image
                      book.bookCover = fallbackImage;
                    }}
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
