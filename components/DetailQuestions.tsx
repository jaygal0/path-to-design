type DesignerProps = {
  question: string;
  answer?: string;
  books?: any;
  apps?: any;
};

export function DetailQuestions({
  question,
  answer,
  books,
  apps,
}: DesignerProps) {
  return (
    <div>
      <div className="mb-4 font-sans text-2xl font-bold">{question}</div>
      {answer ? <div className="text-xl">{answer}</div> : ""}
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
