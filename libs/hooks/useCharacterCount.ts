import { useState, ChangeEvent } from "react";

export const useCharacterCount = (maxChars: number) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [remainingChars, setRemainingChars] = useState(maxChars);
  const [isMax, setIsMax] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const count = e.target.value.length;

    setCharacterCount(count);
    setRemainingChars(maxChars - count);
    setIsMax(count >= maxChars);
  };

  return { characterCount, remainingChars, handleInputChange, isMax };
};
