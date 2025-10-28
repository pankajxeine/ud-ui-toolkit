// ud-ui-toolkit
import Divider from "@mui/material/Divider";
import { DividerProps } from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DividerBasic = ({ children, ...props }: DividerProps) => {
  return <Divider {...props} />;
};

export default DividerBasic;
