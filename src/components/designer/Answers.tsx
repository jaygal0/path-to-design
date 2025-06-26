export interface QuestionAndAnswers {
  question: String;
  answer: [];
}
export function Answers({ question, answer }: QuestionAndAnswers) {
  return (
    <div className="w-full">
      <h3 className="mb-2 text-xl text-muted-foreground">{question}</h3>
      <p className="mb-6 whitespace-pre-wrap font-sans text-xl leading-relaxed">
        {answer}
      </p>
    </div>
  );
}
