// ud-ui-toolkit
import { AnyObject, ObjectSchema, TypeFromShape } from "yup";
import { ButtonProps } from "../components";

export type FormFieldsProps = {
  formName: string;
  title: string;
  fields: InputFieldProps[];
  leftPanelCol?: number;
  rightPanelCol?: number;
  showSubmit?: boolean;
  showPrevious?: boolean;
  showNext?: boolean;
};

export type ButtonActions = {
  name: string;
  actiontype: "cancel" | "next" | "previous" | "submit" | "reset" | "discard";
  handler: (data?: any) => void;
  align?: "left" | "right" | "center";
} & ButtonProps;

export interface FormProps {
  onSubmit: (data: unknown) => void;
  labelButtonSubmit?: string;
  titleForm?: string;
  initialValues: unknown;
  inputs: FormFieldsProps[];
  header?: any;
  contentToolbar?: any;
  content?: any;
  innerScroll?: boolean;
  formView?: "tabs" | "stepper" | "row" | "default";
  actions: ButtonActions[];
  actionButtonPosition?: "left" | "right" | "center" | "space-between";
  stickyHeader?: boolean;
  stickyFooter?: boolean;
}

export type SchemaForm = ObjectSchema<
  {
    [x: string]: any;
  },
  AnyObject,
  TypeFromShape<
    {
      [x: string]: any;
    },
    any
  >
>;

export interface Opt {
  value: string | number;
  desc: string;
}

export type SelectKeys = {
  codeKey: string | number;
  labelKey: string;
};

export type Dependecy = {
  ref: string | string[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  value: string | boolean | number | object | Function;
};

export interface Validation {
  type:
  | "required"
  | "isEmail"
  | "minLength"
  | "isTrue"
  | "oneOf"
  | "minArray"
  | "regex";
  value?: string | number | boolean | any | object;
  regexp?: any;
  message: string;
  ref?: string;
}

export type Variant = "filled" | "outlined" | "standard";

export type InputFieldProps = {
  name: string;
  id?: string;
  show?: boolean;
  type:
  | "text"
  | "radio"
  | "email"
  | "password"
  | "select"
  | "select-with-chips"
  | "checkbox"
  | "datepicker"
  | "date-range-picker"
  | "custom"
  | "multi-checkbox"
  | "multi-check-ac"
  | "toggle"
  | "switch"
  | "autocomplete"
  | "file"
  | "image"
  | "nested-multi-form"
  | "nested-form"
  | "textarea";
  label: string;
  validator?: any;
  validations?: Validation[];
  typeValue?: "boolean" | "number" | "array" | "object" | "string";
  control?: any;
  component?: any;
  disabled?: boolean;
  info?: string;
  hint?: string;
  options?: Opt[];
  multiple?: boolean;
  value: any;
  meta?: any;
  dependency?: Dependecy;
  selectKeys?: SelectKeys;
  fieldCol?: number;
  align?: "left" | "right";
  fields?: InputFieldProps[];
};

export type FormBottomPropsActionsProps = {
  activeFrom: number;
  formList: any[];
  formMethods: any;
  hideActionButtons: boolean;
  prevButtonProps: any;
  nextButtonProps: any;
  onPreviousForm: () => void;
  onNextForm: () => void;
  onSubmit: any;
  otherButtons: ButtonActions[];
};
