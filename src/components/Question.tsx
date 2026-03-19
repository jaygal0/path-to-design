import { plausibleEvents } from "@/config/plausibleEvents";
import { QuizOptionContent } from "@/components/QuizOptionContent";
import type { QuizQuestion } from "@/lib/quizQuestions";

interface QuestionProps {
  question: QuizQuestion;
  questionStep: number;
  onAnswer: (answerIndex: number) => void;
}

export function Question({ question, questionStep, onAnswer }: QuestionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
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
            className={`plausible-event-name=${plausibleEvents.QUIZ_QUESTION_ANSWERED} rounded-2xl border border-stone-700 bg-stone-950 px-4 py-4 text-left text-stone-100 transition hover:border-stone-500 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-300`}
            data-event-step={questionStep}
            data-event-question={question.id}
            data-event-answer={answer.id}
          >
            <QuizOptionContent
              label={answer.label}
              visual={answer.visual}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
