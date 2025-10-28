import React, { useState } from "react";
import { Meta, Story } from "@storybook/react-vite";
import { Snackbar, SnackbarContent } from "..";
import { Checkbox } from "../../Checkbox";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
} as Meta;

export const BasicSnackbar: Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Checkbox
        id="basic-snackbar-checkbox"
        checked={open}
        onChange={() => setOpen(!open)}
        label="Show Snackbar"
        inputProps={{ "aria-label": "toggle snackbar" }}
      />
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Basic Snackbar"
      />
    </>
  );
};

export const AutomaticDismiss: Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Checkbox
        id="auto-dismiss-checkbox"
        checked={open}
        onChange={() => setOpen(!open)}
        label="Show Auto Dismiss"
        inputProps={{ "aria-label": "toggle auto dismiss snackbar" }}
      />
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="This will dismiss automatically"
        autoHideDuration={3000}
      />
    </>
  );
};

export const CustomContent: Story = () => (
  <SnackbarContent
    message="Custom Content Example"
    action={
      <Checkbox
        id="dismiss-checkbox"
        color="default"
        onChange={() => alert("Dismissed")}
        label="Show Custom Snackbar"
        inputProps={{ "aria-label": "dismiss snackbar" }}
      />
    }
  />
);

export const WithAction: Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Checkbox
        id="with-action-checkbox"
        checked={open}
        onChange={() => setOpen(!open)}
        label="Show with Action"
        inputProps={{ "aria-label": "toggle snackbar with action" }}
      />
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Action Snackbar"
        action={
          <Checkbox
            id="undo-checkbox"
            color="info"
            onChange={() => setOpen(false)}
            label="Dismiss"
            inputProps={{ "aria-label": "undo action" }}
          />
        }
      />
    </>
  );
};
