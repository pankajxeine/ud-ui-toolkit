import React from "react";
import { Meta, Story } from "@storybook/react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default TextField",
  variant: "outlined",
  placeholder: "Enter text",
  fullWidth: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled TextField",
  variant: "outlined",
  placeholder: "Can't type here",
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Error TextField",
  variant: "outlined",
  placeholder: "Enter valid input",
  error: true,
  helperText: "Incorrect input.",
};

export const Multiline = Template.bind({});
Multiline.args = {
  label: "Multiline TextField",
  variant: "outlined",
  placeholder: "Enter your message",
  multiline: true,
  rows: 4,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  label: "Small TextField",
  variant: "outlined",
  placeholder: "Enter text",
  size: "small",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Full Width TextField",
  variant: "outlined",
  placeholder: "This takes full width",
  fullWidth: true,
};
