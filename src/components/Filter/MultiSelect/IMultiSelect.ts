// ud-ui-toolkit
import { SelectProps } from "@mui/material";

export interface MultiSelectWrapperProps extends Omit<SelectProps, "onChange"> {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
  helperText?: string;
}
