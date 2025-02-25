import React from "react";
import  FormHelperText  from "@mui/material/FormHelperText";
import { FormHelperTextWrapperProps } from "./IFormHelpText"; 
const FormHelperTextWrapper: React.FC<FormHelperTextWrapperProps> = ({ children, ...rest }) => {
  return <FormHelperText {...rest}>{children}</FormHelperText>;
};

export default FormHelperTextWrapper;
