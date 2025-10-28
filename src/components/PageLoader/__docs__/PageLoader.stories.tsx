import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Modal, Box, Typography } from "../../../index";
import { PageLoader } from '../index'

export default {
  title: "Components/PageLoader",
  component: PageLoader,
  argTypes: {
    title: { control: "text" },
    bodycontent: { control: "text" },
  },
} as Meta;


const Template = (args) => (<PageLoader />);

// Default dialog with title, body content, and both actions
export const Default = {
  render: Template,
};
