// ud-ui-toolkit
import { SxProps } from "@mui/material";

export interface SearchWrapperProps {
  placeholder?: string;
  value?: string;
  onSearch: (query: string) => void;
  fullWidth?: boolean;
  size?: "small" | "medium";
  disabled?: boolean;
  sx?: SxProps;
}
