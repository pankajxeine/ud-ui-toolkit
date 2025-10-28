import { FormFieldsProps } from "../../../types/InputProps";
import { FormSectionHeader } from "../../..";

export const TabConfig = (): FormFieldsProps[] => {
  return [
    {
      formName: "address",
      title: "Participant summary", //  tab step name
      fields: [
        {
          name: "",
          show: true,
          type: "custom",
          component: FormSectionHeader,
          label: "",
          fieldCol: 12,
          value: "General Information",
          meta: {},
        },
        {
          name: "firstname",
          show: true,
          type: "text",
          label: "First Name",
          value: "",
          fieldCol: 4,
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
          meta: {
            placeholder: "Please enter middle name",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "Middle name is required.",
            },
          ],
        },
        {
          name: "lastname",
          show: true,
          type: "text",
          label: "Last Name",
          value: "",
          fieldCol: 4,
          meta: {
            placeholder: "Please enter last name",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "Last name is required.",
            },
          ],
        },
        {
          name: "gender",
          show: true,
          type: "select",
          label: "Gender",
          value: "male",
          options: [
            { desc: "Male", value: "male" },
            { desc: "Female", value: "female" },
          ],
          fieldCol: 4,
          meta: {
            placeholder: "Please select gender",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "Gender is required",
            },
          ],
        },
        {
          name: "dob",
          show: true,
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
          type: "select",
          label: "Language Preference",
          value: "",
          typeValue: "array",
          options: [
            { desc: "English", value: "english" },
            { desc: "Spanish", value: "spanish" },
            { desc: "French", value: "french" },
            { desc: "German", value: "german" },
            { desc: "Italian", value: "italian" },
          ],
          fieldCol: 6,
          meta: {
            placeholder: "Please select language preference",
            size: "small",
            multiple: true,
          },
          validations: [
            {
              type: "required",
              message: "Language preference is required.",
            },
          ],
        },
        {
          name: "specifylanguage",
          show: true,
          type: "text",
          label: "Specify Language",
          value: "",
          fieldCol: 3,
          meta: {
            placeholder: "Please enter language",
            size: "small",
          },
        },
        {
          name: "",
          show: true,
          type: "custom",
          component: FormSectionHeader,
          label: "",
          fieldCol: 3,
          value: "",
          meta: {},
        },

        {
          name: "race",
          show: true,
          type: "select",
          label: "Race",
          typeValue: "array",
          value: [],
          fieldCol: 3,
          options: [
            { desc: "White", value: "w" },
            { desc: "Asian", value: "as" },
            { desc: "American", value: "a" },
            { desc: "Indian", value: "i" },
            { desc: "African", value: "af" },
          ],
          meta: {
            placeholder: "Please select race",
            size: "small",
            isChip: true,
            multiple: true,
          },
          validations: [
            {
              type: "required",
              message: "Race is required.",
            },
          ],
        },

        {
          name: "autovalue",
          type: "autocomplete",
          label: "Large Select",
          show: true,
          typeValue: "object",
          value: "c",
          fieldCol: 4,
          options: [
            {
              desc: "A",
              value: "a",
            },
            {
              desc: "B",
              value: "b",
            },
            {
              desc: "C",
              value: "c",
            },
            {
              desc: "D",
              value: "d",
            },
            {
              desc: "E",
              value: "e",
            },
            {
              desc: "F",
              value: "f",
            },
            {
              desc: "G",
              value: "g",
            },
            {
              desc: "H",
              value: "h",
            },
            {
              desc: "I",
              value: "i",
            },
            {
              desc: "J",
              value: "j",
            },
            {
              desc: "K",
              value: "k",
            },
            {
              desc: "L",
              value: "l",
            },
            {
              desc: "M",
              value: "m",
            },
            {
              desc: "N",
              value: "n",
            },
            {
              desc: "O",
              value: "o",
            },
          ],

          meta: {
            size: "small",
            type: "file",
            maxRows: 2,
            placeholder: "Enter summary event info ",
          },
          validations: [
            {
              type: "required",
              message: "It is required.",
            },
          ],
        },
        {
          name: "summaryevent",
          type: "textarea",
          label: "Summary of event",
          show: true,
          value: "",
          fieldCol: 6,
          meta: {
            size: "small",
            type: "file",
            maxRows: 5,
            placeholder: "Enter summary event info ",
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
    {
      formName: "residential-address",
      title: "Address",
      showNext: true,
      showPrevious: true,
      fields: [
        {
          name: "",
          show: true,
          type: "custom",
          component: FormSectionHeader,
          label: "",
          fieldCol: 12,
          value: "Current Residential Address",
          meta: {},
        },
        {
          name: "street",
          show: true,
          type: "text",
          label: "Street",
          fieldCol: 3,
          value: "",
          meta: {
            placeholder: "Please enter street",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "Streey is required.",
            },
          ],
        },
        {
          name: "city",
          label: "City",
          show: true,
          type: "select",
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
          fieldCol: 3,
          meta: {
            placeholder: "Please select a city",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "City is required.",
            },
          ],
        },
        {
          name: "state",
          label: "State",
          type: "select",
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
          value: [],
          fieldCol: 3,
          meta: {
            placeholder: "Please select a state",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "State is required.",
            },
          ],
        },
        {
          name: "zipcode",
          label: "Zip ",
          type: "text",
          show: true,
          value: "",
          fieldCol: 3,
          meta: {
            placeholder: "Please enter zipcode",
            size: "small",
          },
          validations: [
            {
              type: "required",
              message: "Zip code is required.",
            },
          ],
        },
        {
          name: "addressobtainfrom",
          label: "Address obtain from ",
          type: "select",
          show: true,
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
          show: true,
          value: [],
          meta: {
            placeholder: "Please select date",
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
