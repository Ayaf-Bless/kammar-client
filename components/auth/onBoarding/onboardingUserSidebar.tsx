import Logo from "../../logo/Logo";

import GoBackOnboarding from "./goBack";

import { WithChildren } from "@/types";

interface Props {
  onStepChange: (stepIndex: number) => void;
  currentStep: number;
}

export const OnboardingUserSideBar = ({
  children,
  currentStep,
  onStepChange,
}: WithChildren & Props) => {
  return (
    <div className="flex flex-col justify-between h-[90vh]">
      <div className="flex flex-col gap-14">
        <Logo />
        {children}
      </div>

      <GoBackOnboarding currentStep={currentStep} onStepChange={onStepChange} />
    </div>
  );
};
