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
      <div className=" font-serif text-2xl text-stone-200">{question}</div>
      {answer ? (
        <div className="font-sans text-lg font-thin leading-relaxed">
          {text.map((line: string, index: Key | null | undefined) => {
            return (
              <p key={index} className="mb-4">
                {line}
              </p>
            );
          })}
        </div>
      ) : (
        ""
      )}
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
