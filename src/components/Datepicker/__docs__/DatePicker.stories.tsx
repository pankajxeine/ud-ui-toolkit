import React from "react";
import { Meta, Story } from "@storybook/react";
import { DatePicker } from "../index";
import { IDatePicker } from "../IDatePicker";
import { datePickerDefault, datepickerWithValue } from "./datePickerScheme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// Default export defines the metadata for the component
export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta;

// Template for rendering the component with passed props
const Template: Story<IDatePicker> = (args) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker {...args} />
    </LocalizationProvider>
  );
};

// Default story
export const Default = Template.bind({});
Default.args = datePickerDefault;

export const WithValue = Template.bind({});
WithValue.args = datepickerWithValue;
