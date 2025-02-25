import { StepLabel as MuiStepLabel, StepLabelProps } from "@mui/material";

const StepperStepLabel = (props: StepLabelProps) => {
  return <MuiStepLabel {...props}>{props.children}</MuiStepLabel>;
};

export default StepperStepLabel;
