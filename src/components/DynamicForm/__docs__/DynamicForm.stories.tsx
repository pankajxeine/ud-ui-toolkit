import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DynamicForm, InputFormProps } from "../index";
import React, { useState } from "react";

export default {
  title: "Components/DynamicForm",
  component: DynamicForm,
} as ComponentMeta<typeof DynamicForm>;

const customValidation = (value: any, formData: any) => {
  if (value !== "India" || formData.lastName !== "John") {
    return "John cannot be from India";
  }
};

const formMultiConfig: any = {
  name: "exampleForm",
  layout: "Vertical",
  steps: [
    {
      stepName: "Step 1",
      stepNumber: 0,
      sections: [
        {
          name: "User Details",
          layout: "Horizontal",
          columns: 3,
          fields: [
            {
              type: "text",
              formName: "exampleForm",
              name: "firstName",
              value: "",
              label: "First Name",
              controlProps: {
                required: true,
                info: "First Name",
              },
              required: true,
              changeHandler: (value) => {
                console.log("First Name Changed", value);
              },
              validations: [
                {
                  type: "minLength",
                  value: 2,
                  message: "First Name must be at least 2 characters long",
                },
                {
                  type: "required",
                  message: "First Name is required",
                },
              ],
              validator: customValidation,
            },
            {
              type: "password",
              formName: "exampleForm",
              name: "password",
              value: "",
              label: "Password",
              changeHandler: (value) => {
                console.log("password changed", value);
              },
              required: true,
            },
            {
              type: "email",
              formName: "exampleForm",
              name: "email",
              value: "",
              label: "Email",
              required: true,
            },
            {
              type: "select",
              formName: "exampleForm",
              name: "country",
              value: "",
              label: "Country",
              options: [
                { value: "India", desc: "India" },
                { value: "USA", desc: "USA" },
                { value: "UK", desc: "UK" },
              ],
              selectKeys: { codeKey: "value", labelKey: "desc" },
              required: true,
              dependent: "state",
              changeHandler: (value, fieldName) => {
                console.log("Country Changed", value);
                // handleDependentFieldChange(value, fieldName);
              },
              validations: [
                {
                  type: "required",
                  message: "Country is required",
                },
              ],
            },
            {
              type: "select",
              formName: "exampleForm",
              name: "state",
              value: "",
              label: "State",
              selectKeys: { codeKey: "value", labelKey: "desc" },
              required: true,
              options: [],
              validations: [
                {
                  type: "required",
                  message: "Country is required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      stepName: "Step 2",
      stepNumber: 1,
      sections: [
        {
          name: "User Details",
          layout: "Horizontal",
          columns: 3,
          fields: [
            {
              type: "text",
              formName: "exampleForm",
              name: "firstName",
              value: "",
              label: "First Name",
              required: true,
              changeHandler: (value) => {
                console.log("First Name Changed", value);
              },
              validations: [
                {
                  type: "minLength",
                  value: 2,
                  message: "First Name must be at least 2 characters long",
                },
                {
                  type: "required",
                  message: "First Name is required",
                },
              ],
              validator: customValidation,
            },
            {
              type: "password",
              formName: "exampleForm",
              name: "password",
              value: "",
              label: "Password",
              changeHandler: (value) => {
                console.log("password changed", value);
              },
              required: true,
            },
            {
              type: "select",
              formName: "exampleForm",
              name: "state",
              value: "",
              label: "State",
              selectKeys: { codeKey: "value", labelKey: "desc" },
              required: true,
              options: [],
              validations: [
                {
                  type: "required",
                  message: "Country is required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      stepName: "Step 3",
      stepNumber: 2,
      sections: [
        {
          name: "User Details",
          layout: "Horizontal",
          columns: 3,
          fields: [
            {
              type: "text",
              formName: "exampleForm",
              name: "firstName",
              value: "",
              label: "First Name",
              required: true,
              changeHandler: (value) => {
                console.log("First Name Changed", value);
              },
              validations: [
                {
                  type: "minLength",
                  value: 2,
                  message: "First Name must be at least 2 characters long",
                },
                {
                  type: "required",
                  message: "First Name is required",
                },
              ],
              validator: customValidation,
            },
            {
              type: "password",
              formName: "exampleForm",
              name: "password",
              value: "",
              label: "Password",
              changeHandler: (value) => {
                console.log("password changed", value);
              },
              required: true,
            },
            {
              type: "select",
              formName: "exampleForm",
              name: "state",
              value: "",
              label: "State",
              selectKeys: { codeKey: "value", labelKey: "desc" },
              required: true,
              options: [],
              validations: [
                {
                  type: "required",
                  message: "Country is required",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  actions: [
    {
      name: "Submit",
      type: "submit",
      handler: (data) => {
        console.log("Form Submitted", data);
      },
      variant: "contained",
      color: "primary",
    },
  ],
  formChangeHandler: (data) => {
    console.log("Form Changed", data);
  },
};

const formConfig: any = {
  name: "exampleForm",
  layout: "Vertical",
  steps: [
    {
      stepName: "Step 1",
      stepNumber: 0,
      sections: [
        {
          name: "User Details",
          layout: "Horizontal",
          columns: 3,
          fields: [
            {
              type: "text",
              formName: "exampleForm",
              name: "firstName",
              value: "",
              label: "First Name",
              controlProps: {
                required: true,
                info: "First Name",
              },
              required: true,
              changeHandler: (value) => {
                console.log("First Name Changed", value);
              },
              validations: [
                {
                  type: "minLength",
                  value: 2,
                  message: "First Name must be at least 2 characters long",
                },
                {
                  type: "required",
                  message: "First Name is required",
                },
              ],
              validator: customValidation,
            },
            {
              type: "password",
              formName: "exampleForm",
              name: "password",
              value: "",
              label: "Password",
              changeHandler: (value) => {
                console.log("password changed", value);
              },
              required: true,
            },
            {
              type: "email",
              formName: "exampleForm",
              name: "email",
              value: "",
              label: "Email",
              required: true,
            },
            {
              type: "select",
              formName: "exampleForm",
              name: "country",
              value: "",
              label: "Country",
              options: [
                { value: "India", desc: "India" },
                { value: "USA", desc: "USA" },
                { value: "UK", desc: "UK" },
              ],
              selectKeys: { codeKey: "value", labelKey: "desc" },
              required: true,
              dependent: "state",
              changeHandler: (value, fieldName) => {
                console.log("Country Changed", value);
                // handleDependentFieldChange(value, fieldName);
              },
              validations: [
                {
                  type: "required",
                  message: "Country is required",
                },
              ],
            },
            {
              type: "select",
              formName: "exampleForm",
              name: "state",
              value: "",
              label: "State",
              selectKeys: { codeKey: "value", labelKey: "desc" },
              required: true,
              options: [],
              dependentOn: [
                {
                  field: "country",
                  value: (values: any[]) => {
                    return values[0] == "India";
                  },
                  show: true,
                },
              ],
              validations: [
                {
                  type: "required",
                  message: "Country is required",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  actions: [
    {
      name: "Submit",
      type: "submit",
      handler: (data) => {
        console.log("Form Submitted", data);
      },
      variant: "contained",
      color: "primary",
    },
  ],
  formChangeHandler: (data) => {
    console.log("Form Changed", data);
  },
};

const Template: ComponentStory<typeof DynamicForm> = (args) => {
  const [stateFormConfig, setStateFormConfig] = useState(args);

  const formChangeHandler = (
    fieldConfig: InputFormProps | undefined,
    data: any,
    activeStep: number,
  ) => {
    console.log("Form Changed", data);
    stateFormConfig.steps[activeStep].sections.forEach((section: any) => {
      section.fields.forEach((field: any) => {
        if (fieldConfig?.dependent === field.name) {
          field.options = newStateOptions;
        }
      });
    });
    setStateFormConfig({ ...stateFormConfig });
  };

  return (
    <DynamicForm
      {...{ ...stateFormConfig, formChangeHandler: formChangeHandler }}
    />
  );
};

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  ...formConfig,
};

export const MultiStepForm = Template.bind({});
MultiStepForm.args = {
  ...formMultiConfig,
};

const newStateOptions = [
  { value: "California", desc: "California" },
  { value: "Texas", desc: "Texas" },
  { value: "New York", desc: "New York" },
];
