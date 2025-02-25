import React from "react";
import MUITimelineConnector from "@mui/lab/TimelineConnector";
import { TimelineConnectorProps } from "./types";

const TimelineConnector: React.FC<TimelineConnectorProps> = (props) => {
  return <MUITimelineConnector {...props} />;
};

export default TimelineConnector;
