import React from "react";
import { Meta, Story } from "@storybook/react-vite";
import { Alert } from "../index";
import { alertDefault } from "./alertSchema";
// Default metadata for the component
export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    message: { control: "text" },
    severity: {
      control: "select",
      options: ["error", "warning", "info", "success"],
    },
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard"],
    },
  },
} as Meta;

// Default story with default values
const Template: Story = (args) => <Alert {...args}>{args.message} </Alert>;

// Default Alert
export const Default = Template.bind({});
Default.args = alertDefault;
