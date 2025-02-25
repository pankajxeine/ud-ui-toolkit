import React from "react";
import MUITimelineContent from "@mui/lab/TimelineContent";
import { TimelineContentProps } from "./types";

const TimelineContent: React.FC<TimelineContentProps> = ({ children, ...props }) => {
  return <MUITimelineContent {...props}>{children}</MUITimelineContent>;
};

export default TimelineContent;
