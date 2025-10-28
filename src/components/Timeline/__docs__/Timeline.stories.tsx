import React from "react";
import { Meta, Story } from "@storybook/react-vite";
import { Box, Typography as MUITypography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "..";

export default {
  title: "Components/Timeline",
  component: Timeline,
} as Meta;

const timelineData = [
  { time: "09:30 am", content: "Meeting with the Team" },
  { time: "11:00 am", content: "Presentation" },
  { time: "01:00 pm", content: "Lunch Break" },
  { time: "03:00 pm", content: "Project Review" },
];

const renderTimelineItems = (
  position: "left" | "right" | "alternate",
  color: "primary" | "secondary" | "success",
  variant: "filled" | "outlined"
) =>
  timelineData.map((item, index) => (
    <TimelineItem key={index}>
      <TimelineOppositeContent
        sx={{
          flex: 0.2,
          textAlign: position === "right" ? "left" : "right",
        }}
      >
        <MUITypography color="textSecondary">{item.time}</MUITypography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={color} variant={variant} />
        {index !== timelineData.length - 1 && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{ flex: 0.8 }}>
        <MUITypography>{item.content}</MUITypography>
      </TimelineContent>
    </TimelineItem>
  ));

export const BasicTimeline: Story = () => (
  <Box maxWidth={600}>
    <Timeline position="right">{renderTimelineItems("right", "primary", "filled")}</Timeline>
  </Box>
);

export const LeftTimeline: Story = () => (
  <Box maxWidth={600}>
    <Timeline position="left">{renderTimelineItems("left", "secondary", "outlined")}</Timeline>
  </Box>
);

export const AlternatingTimeline: Story = () => (
  <Box maxWidth={600}>
    <Timeline position="alternate">{renderTimelineItems("alternate", "success", "filled")}</Timeline>
  </Box>
);

export const ColorfulTimeline: Story = () => (
  <Box maxWidth={600}>
    <Timeline position="alternate">
      {renderTimelineItems("alternate", "primary", "filled")}
    </Timeline>
  </Box>
);

export const AlignedTimeline: Story = () => (
  <Box maxWidth={600}>
    <Timeline position="alternate">
      {renderTimelineItems("alternate", "secondary", "outlined")}
    </Timeline>
  </Box>
);
