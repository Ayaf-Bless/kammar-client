"use client";

import { Divider } from "@nextui-org/react";

import HorizontalSteps from "@/components/general/horizontal-steps";
import Wrapper from "@/components/general/wrapper";
import DosDonts from "@/components/seller/onboarding/dos-donts";
import SetupProfileSeller from "@/components/seller/onboarding/setting-up-profile";
import SideBarPanel from "@/components/seller/onboarding/side-bar-onboarding";
import SponsorshipPanel from "@/components/seller/onboarding/sponsorship";
import StepperControls from "@/components/seller/onboarding/stepper-controls";
import { useStep } from "@/contexts/seller/StepContext";
import SkillsAndExpertise from "@/components/seller/onboarding/skill-expertise";

const SellerOnboardingContent = () => {
  const { step } = useStep();

  switch (step) {
    case 0:
      return <DosDonts />;
    case 1:
      return <SetupProfileSeller />;
    case 2:
      return <SkillsAndExpertise />;
    case 3:
      return <SponsorshipPanel />;
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
      defaultStep={2}
      steps={[
        {
          title: "Dos and Don'ts",
        },
        {
          title: "Setting up Profile",
        },
        {
          title: "Skills & Expertise",
        },
        {
          title: "Sponsor and Category",
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
