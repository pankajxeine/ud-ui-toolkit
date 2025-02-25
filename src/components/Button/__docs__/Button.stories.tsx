import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "..";
import { LoadingButtonProps, LoadingButton } from "..";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args}>Click Me</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  color: "primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  color: "primary",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  color: "primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "contained",
  color: "primary",
  disabled: true,
};

export const LoadingButtonExample: Story<LoadingButtonProps> = (args) => (
  <LoadingButton {...args}>Loading...</LoadingButton>
);
LoadingButtonExample.args = {
  loading: true,
  variant: "contained",
  color: "primary",
};
