import React from "react";
import Badge from "@mui/material/Badge";
import { BadgeWrapperProps } from "./IBadgeProps";

const BadgeWrapper: React.FC<BadgeWrapperProps> = ({ children, ...rest }) => {
  return <Badge {...rest}>{children}</Badge>;
};

export default BadgeWrapper;
