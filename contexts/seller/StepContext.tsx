"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface StepContextType {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  sellerData: Record<string, any>;
  updateSellerData: (data: Record<string, any>) => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0);
  const [sellerData, setSellerData] = useState<Record<string, any>>({});

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () =>
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
  const goToStep = (step: number) => setStep(step);
  const updateSellerData = (data: Record<string, any>) =>
    setSellerData((prevData) => ({ ...prevData, ...data }));

  return (
    <StepContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        goToStep,
        sellerData,
        updateSellerData,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);

  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }

  return context;
};
