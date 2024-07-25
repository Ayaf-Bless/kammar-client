import React from "react";
import GetToKnowForm from "./getToKnowForm";
import SetVerificationCode from "./SetCode";

interface Props {
  onStepChange: (stepIndex: number) => void;
  currentStep: number;
}

function ContentSide({ currentStep, onStepChange }: Props) {
  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return <GetToKnowForm onStepChange={onStepChange} />;
      case 1:
        return <SetVerificationCode onStepChange={onStepChange} />;
      // Add cases for steps 2 and 3 when you have those components
      default:
        return <div>Invalid step</div>;
    }
  };

  return <div>{renderContent()}</div>;
}

export default ContentSide;
