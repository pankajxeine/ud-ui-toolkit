import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "../../../index"; // Adjust the import path as needed
import { IDialog } from "../IDialog"; // Assuming IDialog is the type for the props of SimpleDialog
import { DialogDefault, DialogWithoutSecondaryAction } from "./dialogSchema";
import React from "react";
// Default metadata for the component
export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    title: { control: "text" },
    bodyContent: { control: "text" },
    secondaryActionLabel: { control: "text" },
    PrimaryActionLabel: { control: "text" },
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", false],
    },
  },
} as Meta;

// Template function with explicit type for args
const Template = (args) => (
  <Dialog {...args}>
    <DialogTitle> {args.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{args.bodyContent}</DialogContentText>
    </DialogContent>
    <DialogActions>
      {args.secondaryActionLabel && (
        <Button
          onClick={args.handleClose}
        >{args.secondaryActionLabel}</Button>
      )}
      {args.PrimaryActionLabel && (
        <Button
          onClick={args.handleClose}
          autoFocus
        >{args.PrimaryActionLabel}</Button>
      )}
    </DialogActions>
  </Dialog>
);

// Default dialog with title, body content, and both actions
export const Default: StoryObj<IDialog> = {
  render: Template,
  args: DialogDefault,
};

// Dialog without secondary action
export const WithoutSecondaryAction: StoryObj<IDialog> = {
  render: Template,
  args: DialogWithoutSecondaryAction,
};
