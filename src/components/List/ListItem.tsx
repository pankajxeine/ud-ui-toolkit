import React from "react";
import MUIListItem from "@mui/material/ListItem";
import { ListItemProps } from "./types";

/**
 * Wrapper component for MUI ListItem.
 *
 * @param props MUI ListItem properties extended with custom props.
 * @returns JSX.Element
 */
const ListItem: React.FC<ListItemProps> = (props) => {
  const { children, ...rest } = props;

  return <MUIListItem {...rest}>{children}</MUIListItem>;
};

export default ListItem;
