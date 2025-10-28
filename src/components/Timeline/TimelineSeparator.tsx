// ud-ui-toolkit
import MUITimelineSeparator from "@mui/lab/TimelineSeparator";
import React from "react";
import { TimelineSeparatorProps } from "./types";

const TimelineSeparator: React.FC<TimelineSeparatorProps> = ({ children, ...props }) => {
  return <MUITimelineSeparator {...props}>{children}</MUITimelineSeparator>;
};

export default TimelineSeparator;
