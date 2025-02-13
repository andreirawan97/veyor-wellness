import React from "react";

type Props = {
  currentStep: number;
};

export default function StepIndicator(props: Props) {
  const { currentStep } = props;

  const steps = ["Choose Appointment", "Your Info", "Confirmation"];

  return (
    <div
      className="flex w-full items-stretch text-center justify-center rounded border bg-gray-300 border-gray-300 mb-8"
      style={{
        maxWidth: 800,
      }}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-1 items-center justify-center p-2 text-sm md:text-base min-h-full ${
            index === currentStep
              ? "bg-white border-b border-b-black text-black font-bold"
              : " text-gray-700"
          }`}
        >
          <p className="w-full">{step}</p>
        </div>
      ))}
    </div>
  );
}
