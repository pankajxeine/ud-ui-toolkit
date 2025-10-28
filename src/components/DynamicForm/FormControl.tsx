// ud-ui-toolkit
import { Controller } from "react-hook-form";
import { Checkbox, DatePicker, MenuItem, Radio, Select } from "../..";
import { InputWrapper } from "../InputWrapper";
import { TextField } from "../Textfield";
import { Toggle } from "../Toggle";
import { InputFormProps } from "./types";

export const FormController = ({
  name,
  controlProps,
  control,
  label,
  type,
  options,
  selectKeys,
  disabled
}: InputFormProps) => {
  const renderInputField = (onChange: any, value: any, error: any) => {
    switch (type) {
      case "checkbox":
        return <Checkbox {...controlProps} key={name} />;
      case "radio":
        return <Radio {...controlProps} key={name} />;
      case "toggle":
        return <Toggle {...controlProps} key={name} />;
      case "datepicker":
        return <DatePicker {...controlProps} key={name} />;
      case "custom":
        return <h1>test</h1>;
      case "select":
      case "multi-select":
        return (
          <Select
            label={label}
            defaultValue=""
            variant="outlined"
            fullWidth
            multiline={type === "multi-select"}
            onChange={onChange}
            disabled={disabled}
          >
            {options?.map((option: any) => {
              const key = selectKeys?.codeKey ?? "value";
              const labelKey = selectKeys?.labelKey ?? "desc";
              return (
                <MenuItem
                  key={option[key as keyof typeof option]}
                  value={option[key as keyof typeof option]}
                >
                  {option[labelKey as keyof typeof option]}
                </MenuItem>
              );
            })}
          </Select>
        );
      default:
        return (
          <TextField
            onChange={onChange}
            error={!!error}
            value={value}
            size="small"
          />
        );
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="w-full p-8">
          <InputWrapper
            error={!!error}
            errorText={error?.message}
            {...controlProps}
          >
            {renderInputField(onChange, value, error)}
          </InputWrapper>
        </div>
      )}
    />
  );
};
