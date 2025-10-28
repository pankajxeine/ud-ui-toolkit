// ud-ui-toolkit
import MUIMenu from "@mui/material/Menu";
import React from "react";
import { MenuProps } from "./types";

const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
  return <MUIMenu {...props}>{children}</MUIMenu>;
};

export default Menu;
