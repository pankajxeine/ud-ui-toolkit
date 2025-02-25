import React from "react";
import MUITimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { TimelineItemProps } from "./types";

const TimelineItem: React.FC<TimelineItemProps> = ({ children, ...props }) => {
  return <MUITimelineItem {...props}>{children}</MUITimelineItem>;
};

export default TimelineItem;
export {
  timelineItemClasses
}
