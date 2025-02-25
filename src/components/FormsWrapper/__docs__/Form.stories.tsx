import React from "react";
import { ComponentStory, Meta, Story } from "@storybook/react";
import { Form } from "../FormWrapper";
import { getInputs } from "../getInput";
import { addressFormFields } from "./addressFormFields";
import { FieldProps } from "../../../types/InputProps";

export default {
  title: "FormWrapper",
  component: Form,
} as Meta<typeof Form>;

export const initValue = {
  "address1": "",
  "city": "",
  "serviceTktType": [],
  "customerStatus": []
}

const onSubmit = (data: any) => {
  console.log("*********form data************", data);
}
const inputes = addressFormFields();
const userForm = getInputs<any>(inputes[0].fields);

const Template: Story<FieldProps> = (args) => {
  return (
    <Form
      initialValues={initValue}
      onSubmit={onSubmit}
      inputs={inputes}
      validationSchema={userForm.validationSchema} />
  );
};

export const BasicForm: ComponentStory<typeof Form> = () => (
  <>
    <Form
      initialValues={initValue}
      onSubmit={onSubmit}
      inputs={inputes}
      validationSchema={userForm.validationSchema} />
  </>
);
