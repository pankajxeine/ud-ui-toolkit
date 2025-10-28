import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import MultiSelectWrapper from "../MultiSelect";

export default {
  title: "Components/MultiSelectWrapper",
  component: MultiSelectWrapper,
  argTypes: {
    options: {
      control: "array",
      description: "List of selectable options",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select dropdown is disabled",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the select component takes up the full width of its container",
    },
    variant: {
      control: {
        type: "select",
        options: ["standard", "outlined", "filled"],
      },
      description: "Variant of the select component",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
      description: "Size of the select component",
    },
  },
} as Meta;

const Template: Story<any> = (args) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(args.selectedValues || []);

  const handleChange = (selected: string[]) => {
    setSelectedValues(selected);
  };

  return <MultiSelectWrapper {...args} selectedValues={selectedValues} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  options: ["North Carolina", "California", "Texas", "Florida", "New York"],
  selectedValues: [],
  disabled: false,
  fullWidth: false,
  variant: "standard",
  size: "medium",
};
