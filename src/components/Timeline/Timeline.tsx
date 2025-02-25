import React from "react";
import MUITimeline from "@mui/lab/Timeline";
import { TimelineProps } from "./types";

const Timeline: React.FC<TimelineProps> = ({ children, ...props }) => {
  return (
    //@ts-ignore
    <MUITimeline {...props}>{children}</MUITimeline>
  )
};

export default Timeline;
