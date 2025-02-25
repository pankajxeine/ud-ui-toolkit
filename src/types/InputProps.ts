import { FieldError } from "react-hook-form";
import { AnyObject, ObjectSchema, TypeFromShape } from "yup";
// import { TextFieldVariants } from "@mui/material";
// import { FormControlProps } from "@mui/material/FormControl";
// import { InputFieldWrapperProps } from "./IInputWrapperProps";
type SelectKeys = {
    codeKey: string | number
    labelKey: string
}

// export interface InputFieldProps {
//     label: string;
//     required?: true;
//     info?: string;
//     hint?: string;
//     placeholder?: string;
//     slots?: any;
// }

export interface InputProps {
    type: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox' | 'datepicker' | 'custom' | 'autocomplete' | 'multi-checkbox' | 'multi-check-ac' | 'toggle'
    component?: any;
    formName: string;
    inputProps?: any;
    required?: boolean;
    info?: string;
    hint?: string;
    placeholder?: string;
    label: string;
    name: string;
    value?: any;
    typeValue?: 'boolean' | 'number' | 'array'
    validations?: Validation[]
    options?: any[]
    setValue?: any
    control?: any
    error?: boolean;
    errorText?: string;
    show?: boolean
    validator?: any,
    selectKeys?: SelectKeys,
    onChange?: any,
    children?: React.ReactNode
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'oneOf' | 'minArray' | 'regex'
    value?: string | number | boolean | any | object,
    regexp?: any
    message: string
    ref?: string
}

export type FormSection = 'register' | 'another'

export type SchemaForm = ObjectSchema<{
    [x: string]: any;
}, AnyObject, TypeFromShape<{
    [x: string]: any;
}, any>>


export type CustomInputProps = Omit<InputProps, 'validations' | 'typeValue' | 'value'>

export type InputFieldMapperProps = {
    onChange: any;
    inputProps: CustomInputProps;
    errors?: FieldError;
    fieldValue?: any;
    children?: React.ReactNode;
}

export type Size = 'medium'
    | 'small'
    | string
export type Dependecy = {
    ref: string
    value: any
}

export type Color = 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | string

export type Variant = 'filled' | 'outlined' | 'standard';
export type FieldProps = {
    formName: string;
    title: string;
    fields: InputFieldProps[];
}

export type InputFieldProps = {
    name: string;
    id?: string;
    show?: boolean
    type: string;
    label: string;
    validator?: any;
    validations?: Validation[];
    typeValue?: 'boolean' | 'number' | 'array';
    control?: any;
    component?: React.ReactNode;
    disabled?: boolean;
    info?: string;
    hint?: string;
    options?: Opt[];
    multiple?: boolean;
    value: any;
    meta?: {
        labelId?: string;
        required?: boolean;
        placeholder?: string;
        size?: any;
        classes?: any;
        variant?: Variant;
        color?: any;
    },
    dependencies?: Dependecy[],
    selectKeys?: SelectKeys,
}