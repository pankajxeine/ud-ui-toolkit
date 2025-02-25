import React from "react";
import { Meta, Story } from "@storybook/react";
import Tabs, { TabsProps } from "../Tabs";
import Tab, { TabProps } from "../Tab";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const Template: Story<{ tabs: TabProps[] } & TabsProps> = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs {...args} value={value} onChange={handleChange}>
      {args.tabs.map((tabProps, index) => (
        <Tab key={index} {...tabProps} />
      ))}
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {
  tabs: [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }],
  orientation: "horizontal",
  textColor: "primary",
  indicatorColor: "primary",
};

export const VerticalTabs = Template.bind({});
VerticalTabs.args = {
  tabs: [
    { label: "Vertical Tab 1" },
    { label: "Vertical Tab 2" },
    { label: "Vertical Tab 3" },
  ],
  orientation: "vertical",
  textColor: "secondary",
  indicatorColor: "secondary",
};

export const ScrollableTabs = Template.bind({});
ScrollableTabs.args = {
  tabs: [
    { label: "Tab 1" },
    { label: "Tab 2" },
    { label: "Tab 3" },
    { label: "Tab 4" },
    { label: "Tab 5" },
    { label: "Tab 6" },
    { label: "Tab 7" },
  ],
  variant: "scrollable",
  scrollButtons: "auto",
  textColor: "primary",
  indicatorColor: "primary",
  sx: { maxWidth: "300px" },
};

export const Disabled = Template.bind({});
Disabled.args = {
  tabs: [
    { label: "Enabled Tab 1" },
    { label: "Disabled Tab 2", disabled: true },
    { label: "Enabled Tab 3" },
  ],
  orientation: "horizontal",
  textColor: "primary",
  indicatorColor: "primary",
};
