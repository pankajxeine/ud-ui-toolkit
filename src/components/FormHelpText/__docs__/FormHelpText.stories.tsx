import React from "react";
import { Meta, Story } from "@storybook/react-vite";
import FormHelperTextWrapper from "../FormHelpText";
import { FormHelperTextWrapperProps } from "../IFormHelpText";

export default {
  title: "Components/FormHelperTextWrapper",
  component: FormHelperTextWrapper,
  argTypes: {
    children: {
      control: "text",
      description: "Content of the helper text",
    },
    error: {
      control: "boolean",
      description: "If the helper text should be styled as error",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<FormHelperTextWrapperProps> = (args) => <FormHelperTextWrapper {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  children: "Helper text for the field",
  error: false,
};

// Error Story
export const Error = Template.bind({});
Error.args = {
  children: "There was an error with the field",
  error: true,
};
