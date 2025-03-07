export interface QuestionAndAnswers {
  question: String;
  answer: [];
}
export function Answers({ question, answer }: QuestionAndAnswers) {
  return (
    <div className="w-full">
      <h3 className="mb-4 font-serif text-2xl text-stone-200">{question}</h3>
      <p className="mb-3 whitespace-pre-wrap font-sans text-lg font-thin leading-relaxed">
        {answer}
      </p>
    </div>
  );
}
