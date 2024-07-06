import { DetailQuestionsProps } from "./type";

export function DetailQuestions({
  question,
  answer,
  books,
  apps,
}: DetailQuestionsProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className=" font-serif text-xl text-stone-200">{question}</div>
      {answer ? (
        <div className="font-sans text-lg font-thin leading-relaxed">
          {answer}
        </div>
      ) : (
        ""
      )}
      {apps ? (
        <div className="flex gap-3 text-xl">
          {apps?.map((app: any) => {
            return (
              <a
                key={app.name}
                className="font-semibold underline"
                href={app.url}
                target="_blank"
              >
                {app.name}
              </a>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {books ? (
        <div className="flex gap-2 text-xl">
          {books?.map((book: any) => {
            return (
              <a
                key={book.name}
                className="font-semibold underline"
                href={book.url}
                target="_blank"
              >
                {book.name}
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
