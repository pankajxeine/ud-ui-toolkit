import { Paper as MUIPaper } from "@mui/material";
import { CustompaperProps } from "./index";

const Paper = ({ children, ...rest }: CustompaperProps) => (
  <MUIPaper {...rest}>{children}</MUIPaper>
);

export default Paper;
