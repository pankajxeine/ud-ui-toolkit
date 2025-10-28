// ud-ui-toolkit
import MUITimelineDot from "@mui/lab/TimelineDot";
import React from "react";
import { TimelineDotProps } from "./types";

const TimelineDot: React.FC<TimelineDotProps> = ({ children, ...props }) => {
  return <MUITimelineDot {...props}>{children}</MUITimelineDot>;
};

export default TimelineDot;
