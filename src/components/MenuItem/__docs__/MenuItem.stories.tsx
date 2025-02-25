import React from "react";
import { Meta, Story } from "@storybook/react";
import MenuItemWrapper from "../MenuItem";
import { MenuItemWrapperProps } from "../IMenuItemProps";

export default {
  title: "Components/MenuItemWrapper",
  component: MenuItemWrapper,
  argTypes: {
    children: {
      control: "text",
      description: "Content inside the MenuItem",
    },
    disabled: {
      control: "boolean",
      description: "Disable the MenuItem",
    },
    value: {
      control: "text",
      description: "Value for the MenuItem",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<MenuItemWrapperProps> = (args) => <MenuItemWrapper {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  children: "Option 1",
  disabled: false,
  value: "option1",
};

// Disabled Story
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Option",
  disabled: true,
  value: "option2",
};
