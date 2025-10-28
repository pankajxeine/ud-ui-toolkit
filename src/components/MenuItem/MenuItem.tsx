// ud-ui-toolkit
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { MenuItemWrapperProps } from "./IMenuItemProps";

const MenuItemWrapper: React.FC<MenuItemWrapperProps> = ({ children, ...rest }) => {
  return <MenuItem {...rest}>{children}</MenuItem>;
};

export default MenuItemWrapper;
