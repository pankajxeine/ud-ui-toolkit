// ud-ui-toolkit
import FormControl from "@mui/material/FormControl";
import React from "react";
import { FormControlWrapperProps } from "./IFormControl";

const FormControlWrapper: React.FC<FormControlWrapperProps> = ({ children, ...rest }) => {
  return <FormControl {...rest}>{children}</FormControl>;
};

export default FormControlWrapper;
