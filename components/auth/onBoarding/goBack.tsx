import { Button } from "@nextui-org/button";

interface Props {
  onStepChange: (stepIndex: number) => void;
  currentStep: number;
}

function GoBackOnboarding({ currentStep, onStepChange }: Props) {
  const handleClick = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  return (
    <Button
      className="flex gap-1 items-center cursor-pointer"
      disableAnimation={currentStep <= 0}
      isDisabled={currentStep <= 0}
      radius="none"
      variant="light"
      onClick={handleClick}
    >
      <svg
        height="1.2em"
        viewBox="0 0 24 24"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 12H4m0 0l6-6m-6 6l6 6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
      <span>Go back</span>
    </Button>
  );
}

export default GoBackOnboarding;
