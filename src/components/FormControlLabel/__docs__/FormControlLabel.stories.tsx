import React, { useState } from "react";
import { Meta, Story } from "@storybook/react-vite";
import FormControlLabelWrapper from "../../FormControlLabel/FormControlLabel";
import { FormControlLabelWrapperProps } from "../../FormControlLabel/IFormControlLabelProps";

export default {
  title: "Components/FormControlLabelWrapper", 
  component: FormControlLabelWrapper,
  argTypes: {
    label: {
      control: "text",
      description: "The label for the form control label",
    },
    control: {
      description: "The control component to render (such as Radio, Checkbox, etc.)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the form control label is disabled",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<FormControlLabelWrapperProps> = (args) => {
  return <FormControlLabelWrapper {...args} />;
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  label: "Label for the Control", 
  control: <input type="checkbox" />, 
  disabled: false, 
};

// Disabled Story
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true, 
};

// With Radio Story
export const WithRadio = Template.bind({});
WithRadio.args = {
  label: "Radio Option",
  control: <input type="radio" name="group1" />, 
  disabled: false,
};

// With Checkbox Story
export const WithCheckbox = Template.bind({});
WithCheckbox.args = {
  label: "Checkbox Option",
  control: <input type="checkbox" />, 
  disabled: false,
};
