// ud-ui-toolkit
import MUIMenuList from "@mui/material/MenuList";
import React from "react";
import { MenuListProps } from "./types";

const MenuList: React.FC<MenuListProps> = ({ children, ...props }) => {
  return <MUIMenuList {...props}>{children}</MUIMenuList>;
};

export default MenuList;
