import React from "react";
import { Meta, Story } from "@storybook/react";
import BadgeWrapper from "../Badge";
import { BadgeWrapperProps } from "../IBadgeProps";
import { Avatar, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

// Define Storybook metadata
export default {
  title: "Components/BadgeWrapper",
  component: BadgeWrapper,
  argTypes: {
    badgeContent: {
      control: "number",
      description: "The content displayed in the badge",
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "error",
          "default",
          "success",
          "info",
        ],
      },
      description: "Color of the badge",
    },
    max: {
      control: "number",
      description: "Maximum number to display before showing '+' (e.g., '99+')",
    },
    invisible: {
      control: "boolean",
      description: "Hides the badge when true",
    },
    children: {
      description: "The child component wrapped by the badge",
    },
  },
} as Meta;

// Template function for stories
const Template: Story<BadgeWrapperProps> = (args) => <BadgeWrapper {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  badgeContent: 5,
  color: "primary",
  max: 99,
  children: <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />,
};

// Badge on IconButton
export const WithIconButton = Template.bind({});
WithIconButton.args = {
  badgeContent: 10,
  color: "error",
  max: 99,
  children: (
    <IconButton>
      <NotificationsIcon />
    </IconButton>
  ),
};

// Badge with Large Count
export const LargeCount = Template.bind({});
LargeCount.args = {
  badgeContent: 150,
  color: "secondary",
  max: 99,
  children: <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />,
};

// Badge with Invisible Content
export const InvisibleBadge = Template.bind({});
InvisibleBadge.args = {
  badgeContent: 0,
  color: "info",
  invisible: true,
  children: <Avatar alt="User Avatar" src="/static/images/avatar/3.jpg" />,
};

// Badge with Custom Color
export const CustomColor = Template.bind({});
CustomColor.args = {
  badgeContent: 7,
  color: "success",
  max: 99,
  children: <Avatar alt="User Avatar" src="/static/images/avatar/4.jpg" />,
};
