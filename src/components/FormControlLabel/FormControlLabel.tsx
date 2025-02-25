import React from "react";
import  FormControlLabel  from "@mui/material/FormControlLabel";
import { FormControlLabelWrapperProps } from "./IFormControlLabelProps"; 
const FormControlLabelWrapper: React.FC<FormControlLabelWrapperProps> = ({ control, label, ...rest }) => {
  return <FormControlLabel control={control} label={label} {...rest} />;
};

export default FormControlLabelWrapper;
