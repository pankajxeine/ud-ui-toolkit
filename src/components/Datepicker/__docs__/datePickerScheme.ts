import { IDatePicker } from "../IDatePicker";
import dayjs from "dayjs";

export const datePickerDefault: IDatePicker = {
  value: dayjs(""),
  format: "YYYY/MM/DD",
  disabled: false,
  readOnly: false,
  minDate: dayjs("1900-01-01"),
  maxDate: dayjs(),
};

export const datepickerWithValue: IDatePicker = {
  value: dayjs("2022-04-17"),
  format: "YYYY/MM/DD",
  disabled: false,
  readOnly: false,
  minDate: dayjs("1900-01-01"),
  maxDate: dayjs(),
};
