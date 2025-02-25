import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { InputFieldProps } from '../../types/InputProps';
import InputWrapper from "./InputWrapper";
import FormUtil from "../../utils/FormUtil";

export const FormInputRadio: React.FC<InputFieldProps> = (props) => {

  const { name, control, info, hint, options } = props;
  const label = FormUtil.getDisplayLabel(props);
  const generateRadioOptions = () => {
    return options && options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.desc}
        control={<Radio />}
      />
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <div className="w-full p-8">
          <InputWrapper info={info} hint={hint} error={error}>
            <FormControl component="fieldset" error={!!error}>
              <FormLabel component="legend">{label}</FormLabel>
              <RadioGroup value={value} onChange={onChange} >
                <div className="flex flex-row w-full">
                  {generateRadioOptions()}
                </div>

              </RadioGroup>
            </FormControl>
          </InputWrapper>

        </div>
      )}
    />

  );
};
