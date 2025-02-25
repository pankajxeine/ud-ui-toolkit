import React from "react";
import  FormControl  from "@mui/material/FormControl";
import { FormControlWrapperProps } from "./IFormControl"; 

const FormControlWrapper: React.FC<FormControlWrapperProps> = ({ children, ...rest }) => {
  return <FormControl {...rest}>{children}</FormControl>;
};

export default FormControlWrapper;
