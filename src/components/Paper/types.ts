import { PaperProps } from "@mui/material";

export interface CustompaperProps extends PaperProps {
  children: React.ReactNode | string;
}
