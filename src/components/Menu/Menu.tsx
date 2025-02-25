import React from "react";
import MUIMenu from "@mui/material/Menu";
import { MenuProps } from "./types";

const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
  return <MUIMenu {...props}>{children}</MUIMenu>;
};

export default Menu;
