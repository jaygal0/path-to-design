import ReactMarkdown from "react-markdown";

export interface QuestionAndAnswers {
  question: string;
  answer: string; // should be string, not []
}

export function Answers({ question, answer }: QuestionAndAnswers) {
  return (
    <div className="w-full">
      <h3 className="mb-2 text-xl text-muted-foreground">{question}</h3>
      <div className="prose prose-invert max-w-none text-xl leading-relaxed">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
}
