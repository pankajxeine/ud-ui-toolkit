// ud-ui-toolkit
import React, { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "../..";
import Stepper from "../Stepper/Stepper";
import StepperStep from "../Stepper/StepperStep";
import StepperStepLabel from "../Stepper/StepperStepLabel";
import { FormController } from "./FormControl";
import "./styles.css";
import { FormWrapperProps } from "./types";
import { generateValidationSchema } from "./useFormValidationSchema";

const DynamicForm: React.FC<FormWrapperProps> = ({
  name,
  layout,
  steps,
  actions,
  formChangeHandler,
  defaultValues = undefined,
}) => {
  const allFields = steps.flatMap((step) =>
    step.sections.flatMap((section) => section.fields),
  );
  const methods = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(generateValidationSchema(allFields)),
    defaultValues,
  });

  const [isMultiStep] = React.useState(steps.length > 1);
  const [activeStep, setActiveStep] = useState(0);

  const watchFields = methods.watch();
  const prevValues = useRef(watchFields);

  useEffect(() => {
    // Compare previous values with current values
    for (const key in watchFields) {
      if (watchFields[key] !== prevValues.current[key]) {
        const fieldConfig = allFields.find((field) => field.name === key);
        formChangeHandler?.(fieldConfig, watchFields, activeStep);
      }
    }

    // Update previous values
    prevValues.current = watchFields;
  }, [watchFields]);

  const onSubmit = (data: any) => {
    console.log("Form Data: ", data);
  };

  // const reset = () => {
  //   methods.reset();
  // };

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <FormProvider {...methods}>
      {isMultiStep && (
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <StepperStep
              key={step.stepNumber || index}
              onClick={() => handleStepClick(step.stepNumber || index)}
            >
              <StepperStepLabel>{step.stepName}</StepperStepLabel>
            </StepperStep>
          ))}
        </Stepper>
      )}
      <form name={name} onSubmit={methods.handleSubmit(onSubmit)}>
        {steps[activeStep].sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={
              layout === "Horizontal" ? "horizontal-layout" : "vertical-layout"
            }
          >
            <h2>{section.name}</h2>
            <Grid
              container
              spacing={layout === "Horizontal" ? 1 : 0}
              className={`section-fields ${section.layout.toLowerCase()}-layout`}
            >
              {section.fields
                .filter((input) => input.show !== false)
                .map((field, fieldIndex) => (
                  <Grid
                    key={fieldIndex}
                    size={{
                      md: layout === "Horizontal" ? 12 / section.columns : 12,
                      xs: 12,
                    }}
                    className={`field ${field.type}`}
                  >
                    <label htmlFor={field.name}>{field.label}</label>
                    <FormController {...field} key={field.name} />
                  </Grid>
                ))}
            </Grid>
          </div>
        ))}
        {steps.length > 1 && (
          <React.Fragment>
            <Button
              key="previous"
              variant="contained"
              color="success"
              type="button"
              sx={{ marginRight: "1.25rem" }}
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Previous
            </Button>
            <Button
              key="next"
              variant="contained"
              color="success"
              sx={{ marginRight: "1.25rem" }}
              type="button"
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Next
            </Button>
          </React.Fragment>
        )}
        {actions?.map((action, actionIndex) => (
          <Button
            key={actionIndex}
            variant={action.variant}
            color={action.color}
            type="submit"
          // onClick={() => action.handler(methods.getValues())}
          >
            {action.name}
          </Button>
        ))}
      </form>
    </FormProvider>
  );
};

export default DynamicForm;
