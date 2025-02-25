import React from "react";
import { Meta } from "@storybook/react";
import SectionWizardView from "../SectionWizardView";
import { ISectionWizardViewProps } from "../types";

export default {
  title: "Components/SectionWizardView",
  component: SectionWizardView,
} as Meta<typeof SectionWizardView>;

const TempData: ISectionWizardViewProps = {
  header: { title: "Custodial Parents" },
  subsections: [
    {
      statusSection: {
        title: "Maria anna johson",
        options: [
          {
            title: "ona",
            variant: "outlined",
          },
          {
            title: "twna",
            variant: "filled",
          },
        ],
      },
      section: [
        {
          options: {
            fieldName: "Field Label",
            fieldValue: "Click Me",
            link: "https://example.com",
            underline: "hover", // Underline on hover for the link
            iconComp: null, // Icon to be displayed in the beginning
            cssProps: {},
          },
        },
        {
          options: {
            fieldName: "Field Label 2",
            fieldValue: "Click Me",
            link: "https://example.com",
            underline: "hover", // Underline on hover for the link
            iconComp: null, // Icon to be displayed in the beginning
            cssProps: {},
          },
        },
        {
          options: {
            fieldName: "Field Label 3",
            fieldValue: "Click Me",
            link: "https://example.com",
            underline: "hover", // Underline on hover for the link
            iconComp: null, // Icon to be displayed in the beginning
            cssProps: {},
          },
        },
        {
          options: {
            fieldName: "Field Label 4",
            fieldValue: "Click Me",
            link: "https://example.com",
            underline: "hover", // Underline on hover for the link
            iconComp: null, // Icon to be displayed in the beginning
            cssProps: {},
          },
        },
        {
          options: {
            fieldName: "Field Label 5",
            fieldValue: "Click Me",
            link: "https://example.com",
            underline: "hover", // Underline on hover for the link
            iconComp: null, // Icon to be displayed in the beginning
            cssProps: {},
          },
        },
      ],
      footer: () => <h2>I am footer</h2>,
      isFullScreen: true,
    },
    {
      statusSection: {
        title: "Maria anna johson",
        options: [
          {
            title: "MVP",
            variant: "outlined",
          },
        ],
      },
      section: [
        {
          options: {
            fieldName: "Field Label",
            fieldValue: "Click Me",
            link: "https://example.com",
            underline: "hover", // Underline on hover for the link
            iconComp: null, // Icon to be displayed in the beginning
            cssProps: {},
          },
        },
        {
          options: {
            fieldName: "Field Label 2",
            fieldValue: "Click Me",
            link: "https://example.com",
            underline: "hover", // Underline on hover for the link
            iconComp: null, // Icon to be displayed in the beginning
            cssProps: {},
          },
        },
        {
          options: {
            fieldName: "Field Label 5",
            fieldValue: "Click Me",
            link: "https://example.com",
            underline: "hover", // Underline on hover for the link
            iconComp: null, // Icon to be displayed in the beginning
            cssProps: {},
          },
        },
      ],
      footer: () => <h2>I am footer</h2>,
      isFullScreen: true,
    },
  ],
};

export const Simple = () => (
  <SectionWizardView
    subsections={TempData.subsections}
    header={TempData.header}
  />
);
