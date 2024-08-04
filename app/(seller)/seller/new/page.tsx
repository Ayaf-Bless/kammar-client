"use client";

import HorizontalSteps from "@/components/general/horizontal-steps";
import DosDonts from "@/components/seller/onboarding/dos-donts";
import SideBarPanel from "@/components/seller/onboarding/side-bar-onboarding";
import SponsorshipPanel from "@/components/seller/onboarding/sponsorship";
import StepperControls from "@/components/seller/onboarding/stepper-controls";
import { useStep } from "@/contexts/seller/StepContext";

const SellerOnboardingContent = () => {
  const { step } = useStep();

  switch (step) {
    case 0:
      return <DosDonts />;
    case 1:
      return <SponsorshipPanel />;
    case 2:
      return <div>Choose Address Form Placeholder</div>;
    case 3:
      return <div>Complete Payment Form Placeholder</div>;
    case 4:
      return <div>Preview and Confirm Placeholder</div>;
    default:
      return null;
  }
};
const Stepper = () => {
  const { step } = useStep();

  return (
    <HorizontalSteps
      currentStep={step}
      defaultStep={0}
      steps={[
        {
          title: "Dos and Don'ts",
        },
        {
          title: "Seller Information",
        },
        {
          title: "Choose Address",
        },
        {
          title: "Complete Payment",
        },
        {
          title: "Preview and Confirm",
        },
      ]}
    />
  );
};

function page() {
  return (
    <div className="lg:flex">
      <SideBarPanel />
      <div className="flex flex-col p-4 w-full">
        <div className="mx-auto">
          <Stepper />
        </div>
        <SellerOnboardingContent />
        <StepperControls />
      </div>
    </div>
  );
}

export default page;
