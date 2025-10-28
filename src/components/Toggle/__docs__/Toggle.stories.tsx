import React from "react";
import { Meta, Story } from "@storybook/react-vite";
import Switch, { SwitchProps } from "@mui/material/Switch";

export default {
  title: "Components/Toggle",
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultChecked: false,
  color: "primary",
  size: "medium",
};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
  color: "primary",
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultChecked: false,
  color: "primary",
  size: "medium",
  disabled: true,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  defaultChecked: false,
  color: "secondary",
  size: "small",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  defaultChecked: true,
  color: "success",
  size: "medium",
};
