// ud-ui-toolkit
import { FormControlProps } from "@mui/material/FormControl";
import { ReactNode } from "react";

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
