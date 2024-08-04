import { Button } from "@nextui-org/button";

import Logo from "@/components/logo/Logo";
import { useStep } from "@/contexts/seller/StepContext";

const onboardingSteps = [
  "Dos and Don'ts",
  "Setting up Profile",
  "Skills & Expertise",
  "Sponsor and Category",
  "Preview and Confirm",
];

function SideBarPanel() {
  const { step, prevStep } = useStep();

  const currentStepText = onboardingSteps[step];

  return (
    <div className="hidden sticky top-0 w-full max-w-md p-12 lg:h-screen lg:block bg-primary-600">
      <div className="flex items-center mb-8 space-x-4">
        <Logo />
        <Button
          disableAnimation={true}
          disabled={step === 0}
          variant="light"
          onClick={prevStep}
        >
          <svg
            className="w-6 h-6 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              fillRule="evenodd"
            />
          </svg>
          Go back
        </Button>
      </div>
      <div className="block p-8 text-white rounded-lg bg-primary-500">
        <h3 className="mb-1 text-2xl font-semibold">Onboarding Progress</h3>
        <p className="mb-4 font-light text-primary-100 sm:text-lg">
          Step {step + 1} of {onboardingSteps.length}
        </p>
        <h4 className="mb-2 text-lg font-semibold">Current Step:</h4>
        <p className="mb-4 text-base font-light">{currentStepText}</p>
        <ul className="space-y-4 text-left">
          {onboardingSteps.map((plan, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  fillRule="evenodd"
                />
              </svg>
              <span>{plan}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBarPanel;
