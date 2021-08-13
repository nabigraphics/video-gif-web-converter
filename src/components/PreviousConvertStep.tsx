import React, { useEffect } from "react";

interface PreviousConvertStepProps {
  originalFile: File;
  onReset(): void;
}

const PreviousConvertStep = ({
  originalFile,
  onReset,
}: PreviousConvertStepProps) => {
  useEffect(() => {
    console.log(originalFile);
  }, [originalFile]);
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default PreviousConvertStep;
