// ud-ui-toolkit
import { ButtonProps } from "../..";

export interface InputFormProps {
  type:
  | "text"
  | "radio"
  | "email"
  | "password"
  | "select"
  | "checkbox"
  | "datepicker"
  | "custom"
  | "multi-checkbox"
  | "multi-check-ac"
  | "toggle"
  | "multi-select";
  component?: any;
  controlProps: FormControlProps;
  formName: string;
  name: string;
  value: any;
  placeholder?: string;
  label?: string;
  typeValue?: "boolean" | "number" | "array";
  validations?: FormValidation[];
  helperText?: string;
  options?: SelectOpt[];
  setValue?: any;
  control?: any;
  required?: boolean;
  show?: boolean;
  disabled?: boolean;
  validator?: any;
  changeHandler?: (value: any, fieldName: string) => any;
  selectKeys?: InputSelectKeys;
  dependentOn?: [
    {
      field: string | string[];
      value:
      | string
      | string[]
      | boolean
      | number
      | number[]
      | ((...args: any[]) => any);
      show: boolean;
    },
  ];
  dependent: string;
}

export interface FormControlProps {
  label: string;
  required: boolean;
  info: string;
  hint: string;
  placeholder: string;
}

export type InputSelectKeys = {
  codeKey: string | number;
  labelKey: string;
};

export interface SelectOpt {
  value: string | number;
  desc: string;
}

export interface FormValidation {
  type:
  | "required"
  | "isEmail"
  | "minLength"
  | "isTrue"
  | "oneOf"
  | "minArray"
  | "regex";
  value?: string | number | boolean | object;
  regexp?: any;
  message: string;
  ref?: string;
}

export type Layout = "Horizontal" | "Vertical";

export type Section = {
  name: string;
  layout: Layout;
  columns: number;
  fields: InputFormProps[];
};

export type FormStep = {
  stepName: string;
  stepNumber: number;
  sections: Section[];
};

export type Action = {
  name: string;
  type: "submit" | "button";
  handler: (data: any) => void;
} & ButtonProps;

export type FormWrapperProps = {
  name: string;
  layout: Layout;
  steps: FormStep[];
  actions: Action[];
  formChangeHandler?: (
    fieldConfig: InputFormProps | undefined,
    data: any,
    activeStep: number,
  ) => void;
  defaultValues?: any;
};
