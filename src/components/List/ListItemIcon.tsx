// ud-ui-toolkit
import MUIListItemIcon from "@mui/material/ListItemIcon";
import React from "react";
import { ListItemIconProps } from "./types";

/**
 * Wrapper component for MUI ListItemIcon.
 *
 * @param props MUI ListItemIcon properties extended with custom props.
 * @returns JSX.Element
 */
const ListItemIcon: React.FC<ListItemIconProps> = (props) => {
  return <MUIListItemIcon {...props} />;
};

export default ListItemIcon;
