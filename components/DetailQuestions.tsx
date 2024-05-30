type DesignerProps = {
  question: string;
  answer?: string;
  books?: string[];
  apps?: string[];
};

export function DetailQuestions({
  question,
  answer,
  books,
  apps,
}: DesignerProps) {
  return (
    <div>
      <div className="mb-4 text-2xl font-bold">{question}</div>
      {answer ? <div>{answer}</div> : ""}
      {apps?.map((app: any) => {
        return (
          <div className="mb-4" key={app.name}>
            <a
              className="font-semibold underline"
              href={app.link}
              target="_blank"
            >
              {app.name}
            </a>
            <div>{app.desc}</div>
          </div>
        );
      })}
      {books?.map((book: any) => {
        return (
          <div className="mb-4" key={book.book}>
            <a
              className="font-semibold underline"
              href={book.link}
              target="_blank"
            >
              {book.book}
            </a>
            <div>{book.desc}</div>
          </div>
        );
      })}
    </div>
  );
}
