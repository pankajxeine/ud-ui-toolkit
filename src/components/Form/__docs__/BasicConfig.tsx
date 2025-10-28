import { first } from "lodash";
import { FormFieldsProps } from "../../../types/InputProps";
import FormFileUpload from "../../Inputs/FormFileUpload";
import * as yup from "yup";
export const PHONE_REGEXP =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const basicConfig = (): FormFieldsProps[] => {
  return [
    {
      formName: "address",
      title: "Case insurence 1",
      leftPanelCol: 4,
      rightPanelCol: 8,
      fields: [
        {
          name: "location-preference",
          show: true,
          type: "nested-form",
          label: "Location preference",
          value: {},
          typeValue: "object",
          fieldCol: 12,
          align: "right",
          fields: [
            {
              name: "primary",
              show: true,
              type: "text",
              label: "Primary location",
              value: "",
              fieldCol: 6,
              align: "right",
              meta: {
                placeholder: "Please enter start date",
                size: "small",
              },
            },
            {
              name: "secondary",
              show: true,
              type: "text",
              label: "Secondary location",
              value: "",
              fieldCol: 6,
              align: "right",
              meta: {
                placeholder: "Please enter end date",
                size: "small",
              },
            },
          ],
          meta: {},
          validator: yup.lazy(() => {
            return yup.object().shape({
              primary: yup.string().required("Primary location is required"),
              secondary: yup.string(),
            });
          }),
        },
        {
          name: "mulitpleAddress",
          show: true,
          type: "nested-multi-form",
          label: "Multiple Address",
          value: {},
          typeValue: "array",
          fieldCol: 12,
          align: "right",
          fields: [
            {
              name: `street`,
              show: true,
              type: "text",
              label: "Street 1",
              value: "",
              fieldCol: 6,
              align: "right",
              meta: {
                placeholder: "Please enter first name",
                size: "small",
              },
            },
            {
              name: `zipcode`,
              show: true,
              type: "text",
              label: "Zip code 1",
              value: "",
              fieldCol: 6,
              align: "right",
              meta: {
                placeholder: "Please enter first name",
                size: "small",
              },
            },
          ],
          meta: {},
          validator: yup.lazy(() => {
            return yup.array(
              yup.object().shape({
                street: yup.string().required("Required field!"),
                zipcode: yup.string().required("Required field!"),
              }),
            );
          }),
        },
        {
          name: "work-duration",
          show: true,
          type: "date-range-picker",
          label: "Work duration",
          value: {},
          typeValue: "object",
          fieldCol: 12,
          align: "right",
          meta: {
            start: {
              key: "start",
              label: "Duration start date",
              format: "YYYY-MM-DD",
            },
            end: {
              key: "end",
              label: "Duration end date",
            },
          },
        },
        {
          name: "firstname",
          show: true,
          type: "text",
          label: "First Name",
          value: "",
          fieldCol: 4,
          align: "right",

          meta: {
            placeholder: "Please enter first name",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "First name is required.",
            },
          ],
        },
        {
          name: "middlename",
          show: true,
          type: "text",
          label: "Middle Name",
          value: "",
          fieldCol: 4,
          align: "right",
          meta: {
            placeholder: "Please enter middle name",
            size: "small",
          },
        },
        {
          name: "lastname",
          show: true,
          type: "text",
          label: "Last Name",
          value: "",
          align: "right",
          fieldCol: 4,
          meta: {
            placeholder: "Please enter last name",
            size: "small",
          },
        },
        {
          name: "phone",
          show: true,
          type: "text",
          label: "Phone",
          value: "",
          fieldCol: 4,
          align: "right",
          meta: {
            placeholder: "Please enter phone",
            size: "small",
            type: "number",
          },
          validator: yup.lazy((value) => {
            if (value !== undefined && value !== "") {
              return yup
                .string()
                .matches(PHONE_REGEXP, "Phone number is not valid from regx");
            }

            return yup.string().nullable().required();
          }),
        },

        {
          name: "dob",
          show: true,
          align: "right",
          type: "datepicker",
          label: "Date of Birth",
          value: "",
          fieldCol: 4,
          meta: {
            placeholder: "Please select date of birth",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "Date of birth is required.",
            },
          ],
        },
        {
          name: "languageperference",
          show: true,
          align: "right",
          type: "select",
          label: "Language Preference",
          value: [],
          options: [
            { desc: "English", value: "english" },
            { desc: "Spanish", value: "spanish" },
            { desc: "French", value: "french" },
            { desc: "German", value: "german" },
            { desc: "Italian", value: "italian" },
            { desc: "Other", value: "other" },
          ],
          fieldCol: 6,
          meta: {
            placeholder: "Please select language preference",
            size: "small",
            isChip: true,
          },
          validations: [
            {
              type: "required",
              message: "Language preference is required.",
            },
          ],
        },
        {
          name: "specifyanguage",
          show: true,
          align: "right",
          type: "text",
          label: "Specify Language",
          value: "",
          fieldCol: 6,
          meta: {
            placeholder: "Please enter language",
            size: "small",
          },
          dependency: {
            ref: ["languageperference", "firstname"],
            value: (values: any | any[]) => {
              // The order order of the values in the array is the same as the order of the refs
              if (Array.isArray(values)) {
                return values?.[0] == "other" && values?.[1] == "test";
              }
              return values == "other";
            },
          },
          validator: yup.lazy((value, options) => {
            const { parent } = options;
            if (parent.languageperference === "other") {
              return yup.string().required();
            }

            return yup.string().nullable();
          }),
        },
        {
          name: "fileupload",
          show: true,
          type: "custom",
          component: FormFileUpload,
          label: "",
          fieldCol: 12,
          value: "",
          align: "left",
          meta: {
            placeholder: "Please enter address",
            size: "small",
          },
        },
        {
          name: "description",
          show: true,
          type: "textarea",
          label: "Full description",
          value: "",
          align: "left",
          fieldCol: 12,
          meta: {
            placeholder: "Please enter last name",
            size: "small",
          },
        },
      ],
    },
    {
      formName: "address_2",
      title: "Case insurence 2",
      showNext: true,
      showPrevious: true,
      fields: [
        {
          name: "street",
          show: true,
          type: "text",
          label: "Street",
          value: "",
          fieldCol: 6,
          meta: {
            placeholder: "Please enter street",
            size: "small",
          },
          dependency: {
            ref: "languageperference",
            value: "english",
          },
          validations: [
            {
              type: "required",
              message: "Street is required.",
            },
          ],
        },
        {
          name: "city1",
          label: "City",
          show: true,
          type: "text",
          fieldCol: 4,
          value: "",
          options: [
            { desc: "City 1", value: "a" },
            { desc: "City 2", value: "b" },
            { desc: "City 3", value: "c" },
            { desc: "City 4", value: "d" },
            { desc: "City 5", value: "e" },
            { desc: "City 6", value: "f" },
            { desc: "City 7", value: "g" },
          ],
          meta: {
            placeholder: "Please select a city",
            size: "small",
          },
        },
        {
          name: "state",
          label: "State",
          type: "checkbox",
          fieldCol: 6,
          typeValue: "object",
          show: true,
          options: [
            { desc: "State 1", value: "23" },
            { desc: "State 2", value: "24" },
            { desc: "State 3", value: "25" },
            { desc: "State 4", value: "26" },
            { desc: "State 5", value: "27" },
            { desc: "State 6", value: "28" },
            { desc: "State 7", value: "29" },
          ],
          value: {},
          meta: {
            placeholder: "Please select a state",
            size: "small",
          },
        },
        {
          name: "customstate",
          label: "Custom State",
          fieldCol: 4,
          type: "text",
          show: true,
          value: "",
          meta: {
            placeholder: "Please enter custom state",
            size: "small",
          },
          dependency: {
            ref: "state",
            value: { 26: true },
          },
        },
        {
          name: "zipcode",
          label: "Zip ",
          fieldCol: 4,
          type: "text",
          show: true,
          value: "",
          meta: {
            placeholder: "Please enter zipcode",
            size: "small",
          },
        },
        {
          name: "addressobtainfrom",
          label: "Address obtain from ",
          type: "select",
          show: true,
          fieldCol: 8,
          value: [],
          options: [
            { desc: "A", value: "a" },
            { desc: "B", value: "b" },
          ],
          meta: {
            placeholder: "Please select value",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "It is required.",
            },
          ],
          selectKeys: {
            codeKey: "value",
            labelKey: "desc",
          },
        },
        {
          name: "dateadded",
          label: "Date Added",
          type: "datepicker",
          fieldCol: 12,
          show: true,
          value: [],
          meta: {
            placeholder: "Please select value",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "It is required.",
            },
          ],
        },
        {
          name: "gender",
          label: "Gender",
          type: "radio",
          show: true,
          fieldCol: 4,
          value: "m",
          options: [
            { desc: "Male", value: "m" },
            { desc: "Female", value: "f" },
          ],
          meta: {
            placeholder: "Please select value",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "It is required.",
            },
          ],
        },
        {
          name: "category",
          label: "",
          type: "checkbox",
          show: true,
          value: true,
          typeValue: "object",
          fieldCol: 4,
          options: [
            { desc: "Update mainling address to this address", value: "a" },
          ],
          meta: {
            placeholder: "Please select value",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "It is required.",
            },
          ],
        },
        {
          name: "local",
          label: "Is local",
          type: "switch",
          show: true,
          value: true,
          fieldCol: 4,
          meta: {
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "It is required.",
            },
          ],
        },
      ],
    },
  ];
};
