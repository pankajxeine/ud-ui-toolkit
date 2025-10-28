// ud-ui-toolkit
import { FormLabel } from "@mui/material";
import { InputFieldProps } from "../../types/InputProps";
import FormAutoComplete from "../Inputs/FormAutoComplete";
import FormCheckBox from "../Inputs/FormCheckbox";
import FormDatePicker from "../Inputs/FormDatePicker";
import FormInputText from "../Inputs/FormInputText";
import FormRadio from "../Inputs/FormRadio";
import FormSelect from "../Inputs/FormSelect";
import FormTextArea from "../Inputs/FormTextArea";
import MultiSectionComponent from "../Inputs/FormMultiSection";
import FormSectionComponent from "../Inputs/FormSection";
import FormDateRangePicker from "../Inputs/FormDateRangePicker";
import FormToggle from "../Inputs/FormToggle";

export const renderInputField = (inputProps: InputFieldProps) => {
  switch (inputProps.type) {
    case "checkbox":
      return <FormCheckBox {...inputProps} key={inputProps.name} />;
    case "radio":
      return <FormRadio {...inputProps} key={inputProps.name} />;
    case "switch":
      return <FormToggle {...inputProps} key={inputProps.name} />;
    case "nested-multi-form":
      return <MultiSectionComponent {...inputProps} key={inputProps.name} />;
    case "nested-form":
      return <FormSectionComponent {...inputProps} key={inputProps.name} />;
    case "autocomplete":
      return <FormAutoComplete {...inputProps} key={inputProps.name} />;
    case "textarea":
      return <FormTextArea {...inputProps} key={inputProps.name} />;
    case "file":
      return (
        <>
          <FormLabel>{inputProps.label}</FormLabel>
          <FormInputText {...inputProps} key={inputProps.name} />
        </>
      );
    case "datepicker":
      return <FormDatePicker {...inputProps} key={inputProps.name} />;
    case "date-range-picker":
      return <FormDateRangePicker {...inputProps} key={inputProps.name} />;
    case "select":
      return <FormSelect {...inputProps} key={inputProps.name} />;
    case "custom":
      return <inputProps.component {...inputProps} key={inputProps.name} />;
    default:
      return <FormInputText {...inputProps} key={inputProps.name} />;
  }
};
