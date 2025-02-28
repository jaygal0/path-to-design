export interface QuestionAndAnswers {
  question: String;
  answer: [];
}
export function Answers({ question, answer }: QuestionAndAnswers) {
  return (
    <div className="w-full">
      <h3 className="mb-4 font-serif text-2xl text-stone-200">{question}</h3>
      {answer.map((text: string, index: number) => (
        <p
          key={index}
          className="mb-3 font-sans text-lg font-thin leading-relaxed"
        >
          {text}
        </p>
      ))}
    </div>
  );
}
