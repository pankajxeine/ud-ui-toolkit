// ud-ui-toolkit
import MUITimeline from "@mui/lab/Timeline";
import React from "react";
import { TimelineProps } from "./types";

const Timeline: React.FC<TimelineProps> = ({ children, ...props }) => {
  return <MUITimeline {...props}>{children}</MUITimeline>;
};

export default Timeline;
