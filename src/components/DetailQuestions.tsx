import { Key } from "react";
import { DetailQuestionsProps } from "./type";

export function DetailQuestions({
  question,
  answer,
  books,
  apps,
}: DetailQuestionsProps) {
  const text: any = answer?.split("\\n");
  return (
    <div className="flex flex-col gap-2">
      {apps ? (
        <div className="flex gap-3 text-lg">
          {apps?.map((app: any) => {
            return (
              <a
                key={app.app}
                className="font-sans font-thin leading-relaxed underline"
                href={app.url}
                target="_blank"
              >
                {app.app}
              </a>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {books ? (
        <div className="flex gap-3 text-lg">
          {books?.map((book: any) => {
            return (
              <a
                key={book.book}
                className="font-sans font-thin leading-relaxed underline"
                href={book.url}
                target="_blank"
              >
                {book.book}
              </a>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
