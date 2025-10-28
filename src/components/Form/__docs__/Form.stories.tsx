import React from "react";
import { ComponentStory, Meta } from "@storybook/react-vite";
import { Form } from "../index";
import { basicConfig } from "./BasicConfig";
import dayjs from "dayjs";
import { TabConfig } from "./TabConfig";
import { Typography } from "../../Typography";

// Define Storybook metadata
export default {
  title: "component/FormWrapper",
  component: Form,
} as Meta<typeof Form>;

const BasicinitValue = {
  firstname: "TOM",
  lastname: "",
  city: "",
  middlename: "",
  addressobtainfrom: "a",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  state: {},
  dob: dayjs(),
  category: {},
  phone: "1121212121",
  zipcode: "",
  dateadded: dayjs(),
  local: true,
  gender: "m",
  languageperference: "english",
  race: [],
  file: "",
  street: "XYZ",
  date: {},
  "work-duration": {
    start: dayjs(),
    end: dayjs(),
  },
};

const onSubmit = (data: any) => {
  console.log("*********form data************", data);
  alert(JSON.stringify(data));
};

export const BasicForm: ComponentStory<typeof Form> = () => (
  <>
    <Typography variant="h6" component="h6" gutterBottom>
      Participant Summary
    </Typography>
    <Form
      initialValues={BasicinitValue}
      onSubmit={onSubmit}
      inputs={basicConfig()}
      actions={[]}
    />
  </>
);

const TabStepperInitialValue = {
  city: "",
  firstname: "john",
  lastname: "doe",
  middlename: "bob",
  addressobtainfrom: "a",
  state: "",
  dob: dayjs(),
  zipcode: "",
  dateadded: dayjs(),
  local: true,
  gender: "male",
  specifylanguage: "None",
  languageperference: ["spanish"],
  race: [],
  file: "",
  summaryevent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
export const TabForm: ComponentStory<typeof Form> = () => {
  const onSubmit = (data: any) => {
    console.log("*********tab form data************", data);
  };
  return (
    <>
      <Form
        initialValues={TabStepperInitialValue}
        onSubmit={onSubmit}
        inputs={TabConfig()}
        formView="tabs"
        actions={[
          {
            actiontype: "discard",
            name: "Discard",
            handler: () => alert("Handler for Discard"),
            variant: "contained",
            color: "primary",
            align: "left",
          },
        ]}
      />
    </>
  );
};

export const StickyHeaderForm: ComponentStory<typeof Form> = () => {
  const onSubmit = (data: any) => {
    console.log("*********tab form data************", data);
  };
  return (
    <>
      <Form
        initialValues={{
          city: "",
          firstname: "john",
          lastname: "doe",
          middlename: "bob",
          addressobtainfrom: "a",
          state: "",
          dob: dayjs(),
          zipcode: "",
          dateadded: dayjs(),
          local: true,
          gender: "male",
          specifylanguage: "None",
          languageperference: ["spanish"],
          race: [],
          file: "",
          summaryevent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }}
        onSubmit={onSubmit}
        inputs={TabConfig()}
        formView="tabs"
        stickyHeader={true}
        actions={[
          {
            actiontype: "discard",
            name: "Discard",
            handler: () => alert("Handler for Discard"),
            variant: "contained",
            color: "primary",
            align: "left",
          },
        ]}
      />
    </>
  );
};
export const StickyFooterForm: ComponentStory<typeof Form> = () => {
  const onSubmit = (data: any) => {
    console.log("*********tab form data************", data);
  };
  return (
    <>
      <Form
        initialValues={{
          city: "",
          firstname: "john",
          lastname: "doe",
          middlename: "bob",
          addressobtainfrom: "a",
          state: "",
          dob: dayjs(),
          zipcode: "",
          dateadded: dayjs(),
          local: true,
          gender: "male",
          specifylanguage: "None",
          languageperference: ["spanish"],
          race: [],
          file: "",
          summaryevent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }}
        onSubmit={onSubmit}
        inputs={TabConfig()}
        formView="tabs"
        stickyFooter={true}
        actions={[
          {
            actiontype: "discard",
            name: "Discard",
            handler: () => alert("Handler for Discard"),
            variant: "contained",
            color: "primary",
            align: "left",
          },
        ]}
      />
    </>
  );
};
export const TabFormStickyHeaderFooter: ComponentStory<typeof Form> = () => {
  const onSubmit = (data: any) => {
    console.log("*********tab form data************", data);
  };
  return (
    <>
      <Form
        initialValues={{
          city: "",
          firstname: "john",
          lastname: "doe",
          middlename: "bob",
          addressobtainfrom: "a",
          state: "",
          dob: dayjs(),
          zipcode: "",
          dateadded: dayjs(),
          local: true,
          gender: "male",
          specifylanguage: "None",
          languageperference: ["spanish"],
          race: [],
          file: "",
          summaryevent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }}
        onSubmit={onSubmit}
        inputs={TabConfig()}
        formView="tabs"
        stickyHeader={true}
        stickyFooter={true}
        actions={[
          {
            actiontype: "discard",
            name: "Discard",
            handler: () => alert("Handler for Discard"),
            variant: "contained",
            color: "primary",
            align: "left",
          },
        ]}
      />
    </>
  );
};

export const StepperForm: ComponentStory<typeof Form> = () => {
  const onSubmit = (data: any) => {
    console.log("*********Stepper form data************", data);
  };
  return (
    <>
      <Form
        initialValues={TabStepperInitialValue}
        onSubmit={onSubmit}
        inputs={TabConfig()}
        formView="stepper"
        actions={[
          {
            actiontype: "next",
            name: "Next",
            handler: () => alert("Handler for Next"),
            variant: "contained",
            color: "primary",
            align: "right",
          },
          {
            actiontype: "previous",
            name: "Previous",
            handler: () => alert("Handler for Previous"),
            variant: "contained",
            color: "primary",
            align: "left",
          },
        ]}
      />
    </>
  );
};
