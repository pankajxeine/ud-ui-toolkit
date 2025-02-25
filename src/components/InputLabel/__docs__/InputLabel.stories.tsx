import React from "react";
import { Meta, Story } from "@storybook/react";
import InputLabelWrapper from "../InputLabel";
import { InputLabelWrapperProps } from "../IInputLabelProps";

export default {
  title: "Components/InputLabelWrapper",
  component: InputLabelWrapper,
  argTypes: {
    children: {
      control: "text",
      description: "Content inside the InputLabel",
    },
    htmlFor: {
      control: "text",
      description: "The ID of the input this label is for",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<InputLabelWrapperProps> = (args) => <InputLabelWrapper {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  children: "Label for Input",
  htmlFor: "inputField",
};
