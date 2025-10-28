// ud-ui-toolkit
import Drawer from "@mui/material/Drawer";
import { CustomDrawerProps } from "./types";

const DrawerBasic = ({ children, ...props }: CustomDrawerProps) => {
  return <Drawer {...props}> {children} </Drawer>;
};

export default DrawerBasic;
