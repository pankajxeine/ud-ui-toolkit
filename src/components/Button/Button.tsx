// ud-ui-toolkit
import MUIButton from "@mui/material/Button";
import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <MUIButton {...props}>{children}</MUIButton>;
};

export default Button;
