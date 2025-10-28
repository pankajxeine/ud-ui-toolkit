// ud-ui-toolkit
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import { FormControlLabelWrapperProps } from "./IFormControlLabelProps";
const FormControlLabelWrapper: React.FC<FormControlLabelWrapperProps> = ({ control, label, ...rest }) => {
  return <FormControlLabel control={control} label={label} {...rest} />;
};

export default FormControlLabelWrapper;
