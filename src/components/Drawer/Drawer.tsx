import { CustomDrawerProps } from "./types";
import Drawer from "@mui/material/Drawer";

const DrawerBasic = ({ children, ...props }: CustomDrawerProps) => {
  return <Drawer {...props}> {children} </Drawer>;
};

export default DrawerBasic;
