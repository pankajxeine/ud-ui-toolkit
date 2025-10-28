// ud-ui-toolkit
import MUIListItemAvatar from "@mui/material/ListItemAvatar";
import React from "react";
import { ListItemAvatarProps } from "./types";

/**
 * Wrapper component for MUI ListItemAvatar.
 *
 * @param props MUI ListItemAvatar properties extended with custom props.
 * @returns JSX.Element
 */
const ListItemAvatar: React.FC<ListItemAvatarProps> = (props) => {
  return <MUIListItemAvatar {...props} />;
};

export default ListItemAvatar;
