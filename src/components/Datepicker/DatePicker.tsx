// ud-ui-toolkit
import React from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IDatePicker } from "./IDatePicker"; // Adjust the import path accordingly

const DatePickerComp: React.FC<IDatePicker> = ({ ...props }) => {
  return <DatePicker {...props} />;
};

export default DatePickerComp;
