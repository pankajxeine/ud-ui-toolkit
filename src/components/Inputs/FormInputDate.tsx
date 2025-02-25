import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";

import { InputFieldProps } from '../../types/InputProps';

export const FormInputDate: React.FC<InputFieldProps> = ({ name, control }) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker value={value} onChange={onChange} />
        )}
      />
      {/* <ErrorMessage error={err} /> */}
    </LocalizationProvider>
  );
};
