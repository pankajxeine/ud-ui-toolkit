import React from "react";
import MUIButton from "@mui/material/Button";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <MUIButton {...props}>{children}</MUIButton>;
};

export default Button;
