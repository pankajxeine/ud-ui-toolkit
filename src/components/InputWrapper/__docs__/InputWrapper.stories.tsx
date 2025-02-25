import React from "react";
import { Meta, Story } from "@storybook/react";
import InputFieldWrapper from "../InputWrapper";
import { InputFieldWrapperProps } from "../../../types/IInputWrapperProps";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

export default {
  title: "Components/InputFieldWrapper",
  component: InputFieldWrapper,
  argTypes: {
    inputProps: {
      label: {
        control: "text",
        description: "The label for the input field",
      },
      required: {
        control: "boolean",
        description: "Whether the input field is required",
      },
      info: {
        control: "text",
        description: "Additional information or helper text",
      },
      hint: {
        control: "text",
        description: "Hint text to display below the label",
      },
    },
    error: {
      control: "boolean",
      description: "Whether there is an error on the field",
    },
    errorText: {
      control: "text",
      description: "Error message to display below the field",
    },
    children: {
      control: "element",
      description: "Slot for any MUI component or custom component",
    },
  },
} as Meta;

const Template: Story<InputFieldWrapperProps> = (args) => {
  return <InputFieldWrapper {...args}>{args.children}</InputFieldWrapper>;
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  inputProps: {
    label: "Username",
    required: false,
    info: "",
    hint: "",
  },
  children: (
    <TextField variant="outlined" fullWidth placeholder="Enter username" />
  ),
};

// Required Field Story
export const Required = Template.bind({});
Required.args = {
  inputProps: {
    label: "Username",
    required: true,
    info: "",
    hint: "",
  },
  children: (
    <TextField variant="outlined" fullWidth placeholder="Enter username" />
  ),
};

// Input Field with Info Story
export const WithInfo = Template.bind({});
WithInfo.args = {
  inputProps: {
    label: "Email",
    required: false,
    info: "Enter a valid email address",
    hint: "",
  },
  children: (
    <TextField variant="outlined" fullWidth placeholder="Enter email" />
  ),
};

// Input Field with Placeholder
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  inputProps: {
    label: "Username",
    required: false,
    info: "",
    hint: "Please ensure you have a strong username.",
    placeholder: "Enter your username",
  },
  children: <TextField variant="outlined" fullWidth />,
};

// Input Field with Error Story
export const WithError = Template.bind({});
WithError.args = {
  inputProps: {
    label: "Username",
    required: false,
    info: "Username is required",
    hint: "Your username must be unique.",
  },
  error: true,
  errorText: "Please enter a username",
  children: (
    <TextField variant="outlined" fullWidth placeholder="Enter username" />
  ),
};

// Input Field with Select Component (with Error)
export const WithSelectComponent = Template.bind({});
WithSelectComponent.args = {
  inputProps: {
    label: "Country",
    required: false,
    info: "",
    hint: "Select your country from the list.",
    placeholder: "Please select a country",
  },
  error: false,
  errorText: "",
  children: (
    <Select label="Country" defaultValue="" variant="outlined" fullWidth>
      <MenuItem value="us">United States</MenuItem>
      <MenuItem value="ca">Canada</MenuItem>
      <MenuItem value="uk">United Kingdom</MenuItem>
    </Select>
  ),
};

// Select with Error Story
export const SelectWithError = Template.bind({});
SelectWithError.args = {
  inputProps: {
    label: "Country",
    required: true, // Required select field
    info: "Select your country of residence",
    hint: "Choose the country where you live.",
    placeholder: "Please select a country",
  },
  error: true, // Error state
  errorText: "Please select a country",
  children: (
    <Select label="Country" defaultValue="" variant="outlined" fullWidth>
      <MenuItem value="us">United States</MenuItem>
      <MenuItem value="ca">Canada</MenuItem>
      <MenuItem value="uk">United Kingdom</MenuItem>
    </Select>
  ),
};

// Radio Button Example
export const WithRadio = Template.bind({});
WithRadio.args = {
  inputProps: {
    label: "Gender",
    required: true,
    info: "",
    hint: "Select your gender.",
  },
  children: (
    <>
      <FormControlLabel control={<Radio />} label="Male" value="male" />
      <FormControlLabel control={<Radio />} label="Female" value="female" />
    </>
  ),
};
