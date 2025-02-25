import React from "react";
import MUITimelineSeparator from "@mui/lab/TimelineSeparator";
import { TimelineSeparatorProps } from "./types";

const TimelineSeparator: React.FC<TimelineSeparatorProps> = ({ children, ...props }) => {
  return <MUITimelineSeparator {...props}>{children}</MUITimelineSeparator>;
};

export default TimelineSeparator;
