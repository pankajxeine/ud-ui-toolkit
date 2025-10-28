import React from "react";
import { Meta, Story } from "@storybook/react-vite";
import FormControlWrapper from "../FormControl";
import { FormControlWrapperProps } from "../IFormControl";

export default {
  title: "Components/FormControlWrapper",
  component: FormControlWrapper,
  argTypes: {
    children: {
      control: "text",
      description: "Content inside the FormControl",
    },
    required: {
      control: "boolean",
      description: "If the field is required",
    },
    fullWidth: {
      control: "boolean",
      description: "If the FormControl should take full width",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<FormControlWrapperProps> = (args) => <FormControlWrapper {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  children: "This is a form control",
  required: false,
  fullWidth: true,
};
