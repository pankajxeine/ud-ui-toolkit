// ud-ui-toolkit
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormProps } from "../../types/InputProps";
import { Stack } from "../Stack";
import Stepper from "../Stepper/Stepper";
import StepperStep from "../Stepper/StepperStep";
import StepperStepLabel from "../Stepper/StepperStepLabel";
import { Tab, Tabs } from "../Tabs";
import { Typography } from "../Typography";
import { FormFooterActions } from "./FormFooterActions";
import FormInputFields from "./FormInputFields";
import { getAllFields, getInputs } from "./getInput";

const Form = (props: FormProps) => {
  const {
    initialValues = {},
    onSubmit,
    formView = "default",
    inputs,
    actions,
    stickyHeader = false,
    stickyFooter = false,
  } = props;
  const [activeFrom, setActiveForm] = useState(0);

  const fields =
    formView === "default" ? getAllFields(inputs) : inputs[activeFrom].fields;
  const currentFormFields = getInputs<any>(fields, initialValues);

  const nextButtonProps =
    formView == "stepper" &&
    (actions ?? []).find((action) => action.actiontype === "next");
  const prevButtonProps =
    formView == "stepper" &&
    (actions ?? []).find((action) => action.actiontype === "previous");
  const otherButtons = (actions ?? []).filter(
    (action) => !["next", "previous"].includes(action.actiontype)
  );

  const formMethods = useForm({
    resolver: yupResolver(currentFormFields.validationSchema),
    defaultValues: { ...(initialValues as any) },
    reValidateMode: "onChange",
    mode: "all",
  });

  const onNextForm = async () => {
    const isFormValid = await currentFormFields.validationSchema
      .validate(formMethods.getValues(), {
        abortEarly: false,
      })
      .catch(() => false);
    if (isFormValid) {
      setActiveForm(activeFrom + 1);
      nextButtonProps && nextButtonProps.handler && nextButtonProps.handler();
    } else {
      formMethods.trigger(); // Validate all fields
    }
  };

  const onPreviousForm = () => {
    prevButtonProps && prevButtonProps.handler && prevButtonProps.handler();
    setActiveForm(activeFrom - 1);
  };

  const hideActionButtons = formView === "default";
  const isLastForm = activeFrom == inputs.length - 1;
  const showSubmit = formView == "stepper" ? isLastForm : true;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          {stickyHeader && (formView === "tabs" || formView === "stepper") && (
            <Box
              sx={(theme) => ({
                position: "sticky",
                top: 0,
                background:
                  theme.palette.mode === "light" ? "#FAFAFA" : "#303030",
                zIndex: 10,
                p: 2,
              })}
            >
              {formView === "tabs" && (
                <Tabs
                  value={activeFrom}
                  onChange={(_event, newValue) => {
                    setActiveForm(newValue);
                  }}
                >
                  {inputs.map((form, index) => (
                    <Tab label={form.title} key={`${form.title}-${index}`} />
                  ))}
                </Tabs>
              )}
              {formView === "stepper" && (
                <Stepper
                  activeStep={activeFrom}
                  sx={{ flexDirection: { xs: "column", sm: "row" } }}
                >
                  {inputs.map((form, index) => (
                    <StepperStep key={`${form.title}-${index}`}>
                      <StepperStepLabel>{form.title}</StepperStepLabel>
                    </StepperStep>
                  ))
                  }
                </Stepper>
              )}
            </Box>
          )}

          <Stack direction={formView == "row" ? "row" : "column"} spacing={2}>
            {formView === "default" || formView === "row" ? (
              inputs.map((form, index) => {
                return (
                  <Box key={`${form.title}-${index}`}>
                    <Typography
                      variant="subtitle1"
                      paddingY={2}
                      fontWeight={600}
                    >
                      {form.title}
                    </Typography>
                    <FormInputFields
                      fields={form.fields}
                      leftPanelCol={form.leftPanelCol}
                      rightPanelCol={form.rightPanelCol}
                    />
                  </Box>
                );
              })
            ) : (
              <Box>
                {!stickyHeader && formView === "tabs" && (
                  <Tabs
                    value={activeFrom}
                    onChange={(_event, newValue) => {
                      setActiveForm(newValue);
                    }}
                  >
                    {inputs.map((form, index) => (
                      <Tab label={form.title} key={`${form.title}-${index}`} />
                    ))}
                  </Tabs>
                )}
                {!stickyHeader && formView === "stepper" && (
                  <Stepper
                    activeStep={activeFrom}
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "baseline", sm: "center" },
                    }}
                  >
                    {inputs.map((form, index) => (
                      <StepperStep
                        key={`${form.title}-${index}`}
                        sx={{
                          marginBottom: { xs: 1, sm: 0 },
                        }}
                      >
                        <StepperStepLabel>{form.title}</StepperStepLabel>
                      </StepperStep>
                    ))}
                  </Stepper>
                )}
                <FormInputFields
                  fields={inputs[activeFrom].fields || []}
                  leftPanelCol={inputs[activeFrom].leftPanelCol}
                  rightPanelCol={inputs[activeFrom].rightPanelCol}
                />
              </Box>
            )}
          </Stack>

          {stickyFooter ? (
            <Box
              sx={(theme) => ({
                position: "sticky",
                bottom: 0,
                background:
                  theme.palette.mode === "light" ? "#FAFAFA" : "#303030",
                zIndex: 10,
                p: 2,
              })}
            >
              <FormFooterActions
                activeFrom={activeFrom}
                formList={inputs}
                formMethods={formMethods}
                hideActionButtons={hideActionButtons}
                prevButtonProps={prevButtonProps}
                nextButtonProps={nextButtonProps}
                onPreviousForm={onPreviousForm}
                onNextForm={onNextForm}
                onSubmit={showSubmit && onSubmit}
                otherButtons={otherButtons}
              />
            </Box>
          ) : (
            <FormFooterActions
              activeFrom={activeFrom}
              formList={inputs}
              formMethods={formMethods}
              hideActionButtons={hideActionButtons}
              prevButtonProps={prevButtonProps}
              nextButtonProps={nextButtonProps}
              onPreviousForm={onPreviousForm}
              onNextForm={onNextForm}
              onSubmit={showSubmit && onSubmit}
              otherButtons={otherButtons}
            />
          )}
        </form>
      </FormProvider>
    </Box>
  );
};

export default Form;
