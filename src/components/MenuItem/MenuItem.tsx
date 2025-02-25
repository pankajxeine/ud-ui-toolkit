import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { MenuItemWrapperProps } from "./IMenuItemProps";

const MenuItemWrapper: React.FC<MenuItemWrapperProps> = ({ children, ...rest }) => {
  return <MenuItem {...rest}>{children}</MenuItem>;
};

export default MenuItemWrapper;
