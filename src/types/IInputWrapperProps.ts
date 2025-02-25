import { ReactNode } from "react";
import { FormControlProps } from "@mui/material/FormControl";

import { InputProps } from "./InputProps";

export interface InputFieldWrapperProps extends FormControlProps {
  // label: string | undefined;
  // required?: boolean;
  // info?: string;
  // placeholder?: string;
  inputProps: InputProps;
  error?: boolean;
  errorText?: string;
  hint?: string;
  children?: ReactNode;
}