// ud-ui-toolkit
import MUITimelineConnector from "@mui/lab/TimelineConnector";
import React from "react";
import { TimelineConnectorProps } from "./types";

const TimelineConnector: React.FC<TimelineConnectorProps> = (props) => {
  return <MUITimelineConnector {...props} />;
};

export default TimelineConnector;
