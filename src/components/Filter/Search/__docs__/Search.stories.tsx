import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import SearchWrapper from "../Search";
import { TextFieldProps } from "@mui/material/TextField";

export default {
  title: "Components/SearchWrapper",
  component: SearchWrapper,
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the search input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the search input is disabled",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the search input takes up the full width of its container",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
      description: "Size of the search input",
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return <SearchWrapper {...args} value={searchValue} onChange={handleSearchChange} onSearch={(query) => console.log("Search:", query)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search...",
  disabled: false,
  fullWidth: false,
  size: "medium",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  ...Default.args,
  size: "small",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
