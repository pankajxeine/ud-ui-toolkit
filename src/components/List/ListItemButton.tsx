import React from "react";
import MUIListItemButton from "@mui/material/ListItemButton";
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
