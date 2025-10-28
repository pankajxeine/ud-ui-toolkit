// ud-ui-toolkit
import FormHelperText from "@mui/material/FormHelperText";
import React from "react";
import { FormHelperTextWrapperProps } from "./IFormHelpText";
const FormHelperTextWrapper: React.FC<FormHelperTextWrapperProps> = ({ children, ...rest }) => {
  return <FormHelperText {...rest}>{children}</FormHelperText>;
};

export default FormHelperTextWrapper;
