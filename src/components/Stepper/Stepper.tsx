// ud-ui-toolkit
import { Stepper as MuiStepper, StepperProps } from "@mui/material";

const Stepper = (props: StepperProps) => {
  return <MuiStepper {...props}>{props.children}</MuiStepper>;
};

export default Stepper;
