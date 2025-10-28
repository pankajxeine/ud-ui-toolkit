// ud-ui-toolkit
import FormControl from "@mui/material/FormControl";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import { DatePicker } from "../Datepicker";
import InputWrapper from "./InputWrapper";

const FormDatePicker = (props: InputFieldProps) => {
  const { name, control, info, hint, meta } = props;
  const { key, ...metaWithoutKey } = meta || {};
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        console.log(name, " error  -", error);
        return (
          <InputWrapper info={info} hint={hint} error={error}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...metaWithoutKey}
                  label={props.label}
                  value={value}
                  onChange={(v) => {
                    onChange(v);
                    meta?.onChange(v);
                  }}
                />
              </LocalizationProvider>
            </FormControl>
          </InputWrapper>
        );
      }}
    />
  );
};

export default FormDatePicker;
