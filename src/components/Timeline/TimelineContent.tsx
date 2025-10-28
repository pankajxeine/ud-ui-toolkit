// ud-ui-toolkit
import MUITimelineContent from "@mui/lab/TimelineContent";
import React from "react";
import { TimelineContentProps } from "./types";

const TimelineContent: React.FC<TimelineContentProps> = ({ children, ...props }) => {
  return <MUITimelineContent {...props}>{children}</MUITimelineContent>;
};

export default TimelineContent;
