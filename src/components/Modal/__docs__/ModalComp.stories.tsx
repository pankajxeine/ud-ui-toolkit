import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Modal, Box, Typography } from "../../../index";
import { IModal } from "../IModal";
import { modalDialogProps } from "./modalSchema";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    bodyContent: { control: "text" },
  },
} as Meta;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Template = (args) => (
  <Modal {...args}>
    <Box sx={style}>
      <Typography variant="h6" component="h2">
        {args.title}
      </Typography>
      <Typography sx={{ mt: 2 }}>{args.bodyContent}</Typography>
    </Box>
  </Modal>
);

// Default dialog with title, body content, and both actions
export const Default: StoryObj<IModal> = {
  render: Template,
  args: modalDialogProps,
};
