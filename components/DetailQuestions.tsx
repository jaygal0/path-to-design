import { DetailQuestionsProps } from "./type";

export function DetailQuestions({
  question,
  answer,
  books,
  apps,
}: DetailQuestionsProps) {
  return (
    <div>
      <div className="mb-4 font-sans text-xl font-bold">{question}</div>
      {answer ? <div className="text-2xl">{answer}</div> : ""}
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
