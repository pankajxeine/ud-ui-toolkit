// ud-ui-toolkit
import MUITimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import React from "react";
import { TimelineItemProps } from "./types";

const TimelineItem: React.FC<TimelineItemProps> = ({ children, ...props }) => {
  return <MUITimelineItem {...props}>{children}</MUITimelineItem>;
};

export default TimelineItem;
export {
  timelineItemClasses
};

