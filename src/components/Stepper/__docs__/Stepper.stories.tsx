import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import Stepper from "../Stepper";
import StepperStep from "../StepperStep";
import StepperStepLabel from "../StepperStepLabel";
import StepperMobile from "../StepperMobile";

export default {
  title: "Components/Stepper",
  component: Stepper,
} as Meta;

const Template: Story<{
  steps: string[];
  activeStep?: number;
  editable?: boolean;
  orientation?: "horizontal" | "vertical";
}> = ({
  steps,
  activeStep = 1,
  editable = false,
  orientation = "horizontal",
}) => {
  const [currentStep, setCurrentStep] = useState(activeStep);

  const handleStepClick = (step: number) => {
    if (editable) {
      setCurrentStep(step);
    }
  };

  return (
    <Stepper activeStep={currentStep} orientation={orientation}>
      {steps.map((label, index) => (
        <StepperStep key={label} onClick={() => handleStepClick(index)}>
          <StepperStepLabel>{label}</StepperStepLabel>
        </StepperStep>
      ))}
    </Stepper>
  );
};

export const Editable = Template.bind({});
Editable.args = {
  steps: ["Edit Step 1", "Edit Step 2", "Edit Step 3"],
  editable: true,
};

export const NonEditable = Template.bind({});
NonEditable.args = {
  steps: ["Non-editable Step 1", "Non-editable Step 2", "Non-editable Step 3"],
  editable: false,
};

export const VerticalStepper = Template.bind({});
VerticalStepper.args = {
  steps: ["Step 1", "Step 2", "Step 3"],
  orientation: "vertical",
  editable: false,
};

export const Mobile: Story = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "This is the content for Mobile Step 1",
    "This is the content for Mobile Step 2",
    "This is the content for Mobile Step 3",
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
  };

  return (
    <div>
      <div style={{ marginBottom: "16px", textAlign: "center" }}>
        {steps[activeStep]}
      </div>
      <StepperMobile
        steps={steps.length}
        activeStep={activeStep}
        backButton={
          <button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </button>
        }
        nextButton={
          <button
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </button>
        }
      />
    </div>
  );
};
