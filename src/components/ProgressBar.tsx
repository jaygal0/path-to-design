import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
  label?: string;
}

export function ProgressBar({
  currentQuestion,
  totalQuestions,
  className,
  label = "Question",
}: ProgressBarProps) {
  const progress = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between text-sm text-stone-300">
        <span>
          {label} {currentQuestion} / {totalQuestions}
        </span>
        <span>{progress}% progress</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-stone-800">
        <div
          className="h-full rounded-full bg-stone-100 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
