import Image from "next/image";

export function BooksUsed({ books }: any) {
  console.log(books);

  return (
    <div>
      <h3 className="mb-4 font-serif text-2xl text-stone-200">
        What books do you recommend?
      </h3>
      <div className="flex flex-wrap gap-10 gap-y-4">
        {books?.map((book: any) => {
          return (
            <a
              key={book.book}
              className="font-sans font-thin leading-relaxed"
              href={book.url}
              target="_blank"
            >
              <div
                key={book.book}
                className="flex flex-col items-center gap-2 overflow-hidden rounded-xl"
              >
                <Image
                  src={`/book-${book.book.toLowerCase()}.jpg`}
                  alt={book.book}
                  width={100}
                  height={160}
                  quality={100}
                />
                <p className="my-0 text-center text-sm capitalize">
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
