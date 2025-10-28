// ud-ui-toolkit
import FormControl from "@mui/material/FormControl";
// import React from "react";
import { FormControlWrapperProps } from "./IFormControl";

const FormControlWrapper = ({ children, ...rest }: FormControlWrapperProps) => {
  return <FormControl {...rest}>{children}</FormControl>;
};

export default FormControlWrapper;
