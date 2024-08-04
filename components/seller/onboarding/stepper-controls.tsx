import { Button } from "@nextui-org/button";
import React from "react";

import Wrapper from "@/components/general/wrapper";
import { useStep } from "@/contexts/seller/StepContext";

const StepperControls: React.FC = () => {
  const { step, nextStep, prevStep } = useStep();

  return (
    <Wrapper>
      <div className="flex space-x-3">
        <Button
          disableAnimation
          className="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          disabled={step <= 0}
          onClick={prevStep}
        >
          Previous
        </Button>
        <Button
          disableAnimation
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          disabled={step >= 4}
          onClick={nextStep}
        >
          Next
        </Button>
      </div>
    </Wrapper>
  );
};

export default StepperControls;
