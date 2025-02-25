import React from "react";
import { SchedularWrapperProps } from "../types.ts";
import { Schedular } from "../index.ts";

export default {
  title: "Components/Schedular",
  component: Schedular,
  argTypes: {
    defaultView: {
      control: {
        type: "select",
        options: ["month", "week", "day", "agenda"],
      },
    },
    selectable: {
      control: "boolean",
    },
  },
};

const Template = (args: SchedularWrapperProps) => <Schedular {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: [
    {
      id: "1",
      title: "Meeting",
      start: new Date(2025, 0, 10, 10, 0),
      end: new Date(2025, 0, 10, 12, 0),
    },
    {
      id: "2",
      title: "Conference",
      start: new Date(2025, 0, 12, 9, 0),
      end: new Date(2025, 0, 12, 17, 0),
    },
  ],
  onEventDrop: (event, newStart, newEnd) => {
    console.log("Dropped:", event, newStart, newEnd);
  },
  onSelectSlot: (event) => {
    alert(event.start);
    console.log(event);
  },
};