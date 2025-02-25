import { FieldProps } from '../../../types/InputProps';
// import * as yup from 'yup';
import { AlertLevels } from './options/AlertLevels';
// import InputAdornment from '@mui/material/InputAdornment';

export const addressFormFields = (): FieldProps[] => {
    // const { countries, selectedCountryCode } = fieldOptions;
    // const country = countries && countries.find((country: any) => country.id === selectedCountryCode)

    return [
        {
            formName: "address",
            title: "Address Form",
            fields: [
                {
                    name: "address1",
                    show: true,
                    type: "text",
                    label: "City",
                    info: "Select your country of residence",
                    hint: "Choose the country where you live.",
                    value: "",
                    meta: {
                        placeholder: "Please select a country",
                        size: 'small'
                    },
                    validations: [
                        {
                            type: "required",
                            message: "City is required."
                        },
                    ],
                    dependencies: [{
                        ref: "provide_address",
                        value: "true"
                    }]
                },
                {
                    name: "city",
                    label: "Post Code",
                    show: true,
                    type: "text",
                    value: "",
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small'
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                    ],
                },
                {
                    name: "serviceTktType",
                    label: "Service ticket type",
                    type: "multi-check-ac",
                    show: true,
                    typeValue: "array",
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                        {
                            type: "minArray",
                            message: "Email is required."
                        }
                    ],
                },
                {
                    name: "customerStatus",
                    label: "Customer Status",
                    type: "multi-check-ac",
                    show: true,
                    typeValue: "array",
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                        {
                            type: "minArray",
                            message: "Select minimun one customer status."
                        }
                    ],
                },
                {
                    name: "customerStatus-s",
                    label: "Customer Status",
                    type: "select",
                    show: true,
                    typeValue: "array",
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                        {
                            type: "minArray",
                            message: "Select minimun one customer status."
                        }
                    ],
                },
                {
                    name: "customerStatus-a",
                    label: "Status",
                    type: "autocomplete",
                    show: true,
                    typeValue: "array",
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "minArray",
                            message: "Select minimun one customer status."
                        }
                    ],
                },
                {
                    name: "customerStatus-c",
                    label: "Status",
                    type: "checkbox",
                    show: true,
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                        {
                            type: "minArray",
                            message: "Select minimun one customer status."
                        }
                    ],
                },
            ]
        },
        {
            formName: "contact",
            title: "Contact Form",
            fields: [
                {
                    name: "address1",
                    show: true,
                    type: "text",
                    label: "City",
                    info: "Select your country of residence",
                    hint: "Choose the country where you live.",
                    value: "",
                    meta: {
                        placeholder: "Please select a country",
                        size: 'small'
                    },
                    validations: [
                        {
                            type: "required",
                            message: "City is required."
                        },
                    ],
                    dependencies: [{
                        ref: "provide_address",
                        value: "true"
                    }]
                },
                {
                    name: "city",
                    label: "Post Code",
                    show: true,
                    type: "text",
                    value: "",
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small'
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                    ],
                },
                {
                    name: "serviceTktType",
                    label: "Service ticket type",
                    type: "multi-check-ac",
                    show: true,
                    typeValue: "array",
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                        {
                            type: "minArray",
                            message: "Email is required."
                        }
                    ],
                },
                {
                    name: "customerStatus",
                    label: "Customer Status",
                    type: "multi-check-ac",
                    show: true,
                    typeValue: "array",
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                        {
                            type: "minArray",
                            message: "Select minimun one customer status."
                        }
                    ],
                },
                {
                    name: "customerStatus-s",
                    label: "Customer Status",
                    type: "select",
                    show: true,
                    typeValue: "array",
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                        {
                            type: "minArray",
                            message: "Select minimun one customer status."
                        }
                    ],
                },
                {
                    name: "customerStatus-a",
                    label: "Status",
                    type: "autocomplete",
                    show: true,
                    typeValue: "array",
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "minArray",
                            message: "Select minimun one customer status."
                        }
                    ],
                },
                {
                    name: "customerStatus-c",
                    label: "Status",
                    type: "checkbox",
                    show: true,
                    options: AlertLevels,
                    value: [],
                    meta: {
                        placeholder: "Please select a city",
                        size: 'small',
                    },
                    validations: [
                        {
                            type: "required",
                            message: "Post code is required."
                        },
                        {
                            type: "minArray",
                            message: "Select minimun one customer status."
                        }
                    ],
                },
            ]
        }
    ]
}