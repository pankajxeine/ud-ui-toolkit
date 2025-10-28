// ud-ui-toolkit
import MUIMenuItem from "@mui/material/MenuItem";
import React from "react";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => {
  return <MUIMenuItem {...props}>{children}</MUIMenuItem>;
};

export default MenuItem;
