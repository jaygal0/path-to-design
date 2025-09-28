export const Stepper = ({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) => {
  return (
    <div className="mb-2 mt-8 flex justify-between">
      {steps.map((stepLabel, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={stepLabel} className="flex flex-1 items-center">
            {/* Step circle */}
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
              className={`ml-2 text-sm font-medium ${
                isActive
                  ? "text-green-500"
                  : isCompleted
                    ? "text-green-600"
                    : "text-gray-400"
              }`}
            >
              {stepLabel}
            </span>

            {/* Line connecting steps */}
            {index !== steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 ${
                  isCompleted ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
