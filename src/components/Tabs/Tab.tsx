import { Tab as MuiTab } from "@mui/material";
import { CustomTabProps } from "./types";

const Tab = ({ ...props }: CustomTabProps) => {
  return <MuiTab {...props} />;
};

export default Tab;
