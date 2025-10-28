// ud-ui-toolkit
import MUIListItemText from "@mui/material/ListItemText";
import React from "react";
import { ListItemTextProps } from "./types";

/**
 * Wrapper component for MUI ListItemText.
 *
 * @param props MUI ListItemText properties extended with custom props.
 * @returns JSX.Element
 */
const ListItemText: React.FC<ListItemTextProps> = (props) => {
  return <MUIListItemText {...props} />;
};

export default ListItemText;
