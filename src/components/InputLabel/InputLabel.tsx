// ud-ui-toolkit
import InputLabel from "@mui/material/InputLabel";
import React from "react";
import { InputLabelWrapperProps } from "./IInputLabelProps";

const InputLabelWrapper: React.FC<InputLabelWrapperProps> = ({ children, ...rest }) => {
  return <InputLabel {...rest}>{children}</InputLabel>;
};

export default InputLabelWrapper;
