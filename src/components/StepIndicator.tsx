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
      {steps.map((step, index) => {
        const isActive = index === currentStep;

        return (
          <div
            key={index}
            className={`flex flex-1 items-center justify-center text-sm md:text-base min-h-full ${
              isActive
                ? "bg-white border-b border-b-black text-black font-bold"
                : " text-gray-700"
            }`}
          >
            {/* Hacky Triangle */}
            {currentStep === 0 && index === 1 && (
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderTop: `25px solid rgb(209 213 219)`,
                  borderBottom: `25px solid rgb(209 213 219)`,
                  borderLeft: `25px solid white`,
                }}
              />
            )}

            {currentStep === 1 && index === 1 && (
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderTop: `25px solid white`,
                  borderBottom: `25px solid white`,
                  borderLeft: `25px solid rgb(209 213 219)`,
                }}
              />
            )}
            {currentStep === 1 && index === 2 && (
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderTop: `25px solid rgb(209 213 219)`,
                  borderBottom: `25px solid rgb(209 213 219)`,
                  borderLeft: `25px solid white`,
                }}
              />
            )}

            {currentStep === 2 && index === 2 && (
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderTop: `25px solid white`,
                  borderBottom: `25px solid white`,
                  borderLeft: `25px solid rgb(209 213 219)`,
                }}
              />
            )}

            <p className="w-full">{step}</p>
          </div>
        );
      })}
    </div>
  );
}
