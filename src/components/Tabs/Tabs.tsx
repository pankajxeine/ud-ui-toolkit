// ud-ui-toolkit
import { Tabs as MuiTabs } from "@mui/material";
import { CustomTabsProps } from "./types";

const Tabs = ({ ...props }: CustomTabsProps) => {
  return <MuiTabs {...props} />;
};

export default Tabs;
