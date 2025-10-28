// ud-ui-toolkit
import { Step as MuiStep, StepProps } from "@mui/material";

const StepperStep = (props: StepProps) => {
  return <MuiStep {...props}>{props.children}</MuiStep>;
};

export default StepperStep;
