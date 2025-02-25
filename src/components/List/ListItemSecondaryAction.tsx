import React from "react";
import MUIListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import { ListItemSecondaryActionProps } from "./types";

/**
 * Wrapper component for MUI ListItemSecondaryAction.
 *
 * @param props MUI ListItemSecondaryAction properties extended with custom props.
 * @returns JSX.Element
 */
const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = (
  props,
) => {
  return <MUIListItemSecondaryAction {...props} />;
};

export default ListItemSecondaryAction;
