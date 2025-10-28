// ud-ui-toolkit
import MUIListItemButton from "@mui/material/ListItemButton";
import React from "react";
import { ListItemButtonProps } from "./types";

/**
 * Wrapper component for MUI ListItemButton.
 *
 * @param props MUI ListItemButton properties extended with custom props.
 * @returns JSX.Element
 */
const ListItemButton: React.FC<ListItemButtonProps> = (props) => {
  return <MUIListItemButton {...props} />;
};

export default ListItemButton;
