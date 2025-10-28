import React from "react";
import { Meta, Story } from "@storybook/react-vite";
import AutocompleteWrapper from "../Autocomplete";
import { AutocompleteProps, TextField } from "@mui/material";

export default {
  title: "Components/Autocomplete",
  component: AutocompleteWrapper,
} as Meta;

const Template: Story<AutocompleteProps<any, any, any, any>> = (args) => (
  <AutocompleteWrapper
    {...args}
    disablePortal
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Movie" />}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Autocomplete",
  options: ["C", "C++", "Java"],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Autocomplete",
  options: ["C", "C++", "Java"],
  disabled: true,
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: "Select Multiple Options",
  options: ["C", "C++", "Java", "Python"],
  multiple: true,
};

export const GroupByCategory = Template.bind({});
GroupByCategory.args = {
  label: "Group by Category",
  options: [
    { category: "FrontEnd", name: "React" },
    { category: "FrontEnd", name: "Angular" },
    { category: "Backend", name: "Spring" },
    { category: "Backend", name: "Node.js" },
  ],
  groupBy: (option) => option.category,
  getOptionLabel: (option) => option.name,
};
