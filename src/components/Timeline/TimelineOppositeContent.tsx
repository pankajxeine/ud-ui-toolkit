// ud-ui-toolkit
import MUITimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import React from "react";
import { TimelineOppositeContentProps } from "./types";

const TimelineOppositeContent: React.FC<TimelineOppositeContentProps> = ({ children, ...props }) => {
  return <MUITimelineOppositeContent {...props}>{children}</MUITimelineOppositeContent>;
};

export default TimelineOppositeContent;
