import type { QuizQuestion } from "@/lib/quizQuestions";

interface QuestionProps {
  question: QuizQuestion;
  onAnswer: (answerIndex: number) => void;
}

export function Question({ question, onAnswer }: QuestionProps) {
  return (
    <div className="space-y-6 rounded-3xl border border-stone-800 bg-stone-900/70 p-6 md:p-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
          Quick question
        </p>
        <h2 className="text-2xl font-semibold text-stone-50 md:text-3xl">
          {question.prompt}
        </h2>
      </div>

      <div className="grid gap-3">
        {question.answers.map((answer, index) => (
          <button
            key={answer.id}
            type="button"
            onClick={() => onAnswer(index)}
            className="rounded-2xl border border-stone-700 bg-stone-950 px-4 py-4 text-left text-stone-100 transition hover:border-stone-500 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-300"
          >
            {answer.label}
          </button>
        ))}
      </div>
    </div>
  );
}
