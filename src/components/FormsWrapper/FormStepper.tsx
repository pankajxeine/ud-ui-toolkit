// import { IField, BaseFormStepper } from "@manojadams/metaforms-core";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box } from "@mui/material";
import { FormProps } from './FormProps';

export const FormStepper = (props: FormProps) => {
    //const [activeStep, setActiveStep] = React.useState(0);
    return (
        <Box
            className="meta-form-stepper"
            data-pagenumber={1}
            sx={{ width: "100%", overflowX: "auto" }}
        >
            <Stepper activeStep={0} alternativeLabel>
                {props.inputs.map((step) => (
                    <Step key={step.formName}>
                        <StepLabel>{step.title}</StepLabel>
                    </Step>
                ))}
            </Stepper>

        </Box>
    );
}
