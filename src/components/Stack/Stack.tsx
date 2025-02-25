import { Stack } from "@mui/material";
import { StackProps } from "./types";

const StackBasic = ({ children, ...props }: StackProps) => {
  return <Stack {...props}>{children}</Stack>;
};

export default StackBasic;
