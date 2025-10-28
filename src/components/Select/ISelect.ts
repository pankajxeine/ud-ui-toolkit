import Select from "@mui/material/Select";
import { SelectProps as MUISelectProps } from "@mui/material/Select";

export type SelectProps = MUISelectProps & {
  "aria-label"?: string;
  helperText?: string;
};

export { Select };
export * from "@mui/material/Select";
