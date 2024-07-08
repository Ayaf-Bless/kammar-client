"use client";

import React, { useState } from "react";

import ContentSide from "@/components/auth/onBoarding/ContentsSide";
import { OnboardingUserSideBar } from "@/components/auth/onBoarding/onboardingUserSidebar";
import VerticalSteps from "@/components/vertical-steps";
import { useAppSelector } from "@/store/store";

function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="flex gap-5">
      <OnboardingUserSideBar
        currentStep={currentStep}
        onStepChange={handleStepChange}
      >
        <VerticalSteps
          currentStep={currentStep}
          steps={[
            {
              title: "Let's Get to Know You",
              description:
                "Tell us a bit about yourself to set up your account",
            },
            {
              title: "Verify Your Email",
              description: "Enter the verification code sent to your inbox",
            },
            {
              title: "Dos and Don'ts",
              description: "Learn about our community guidelines",
            },
            {
              title: "Welcome to Kammar",
              description: "A warm welcome message from our CEO",
            },
          ]}
          onStepChange={handleStepChange}
        />
      </OnboardingUserSideBar>

      <ContentSide currentStep={currentStep} onStepChange={handleStepChange} />
    </div>
  );
}

export default Onboarding;
