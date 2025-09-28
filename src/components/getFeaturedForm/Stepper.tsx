export const Stepper = ({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) => {
  return (
    <div className="relative mb-8 mt-8 flex items-center justify-between">
      {/* Background horizontal line */}
      <div className="absolute left-4 right-4 top-4 z-0 h-0.5 bg-gray-300"></div>

      {steps.map((stepLabel, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div
            key={stepLabel}
            className="relative z-10 flex min-w-[60px] flex-1 flex-col items-center gap-2 text-center"
          >
            {/* Circle */}
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                isActive
                  ? "border-green-500 bg-green-500 text-white"
                  : isCompleted
                    ? "border-green-500 bg-green-100 text-green-500"
                    : "border-gray-400 bg-gray-100 text-gray-400"
              }`}
            >
              {stepNumber}
            </div>

            {/* Step label */}
            <span
              className={`w-full truncate text-sm font-medium ${
                isActive
                  ? "text-green-500"
                  : isCompleted
                    ? "text-green-600"
                    : "text-gray-400"
              }`}
              title={stepLabel} // Show full text on hover
            >
              {stepLabel}
            </span>
          </div>
        );
      })}
    </div>
  );
};
