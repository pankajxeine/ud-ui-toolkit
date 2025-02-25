import { ReactNode } from "react";
import { FormControlProps } from "@mui/material/FormControl";

export interface InputFieldWrapperProps extends FormControlProps {
  label: string;
  required?: boolean;
  info?: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  hint?: string;
  children: ReactNode;
}
