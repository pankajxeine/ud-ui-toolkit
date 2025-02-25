import { IDialog } from "../IDialog";
export const DialogDefault: IDialog = {
  title: "Dialog Title",
  bodyContent: "This is a simple dialog message.",
  secondaryActionLabel: "Cancel",
  PrimaryActionLabel: "Confirm",
  open: false,
  maxWidth: "sm",
  fullScreen: false,
  fullWidth: true,
};

// Dialog without secondary action
export const DialogWithoutSecondaryAction: IDialog = {
  title: "Dialog without Secondary Action",
  bodyContent: "This dialog only has the primary action.",
  secondaryActionLabel: "",
  PrimaryActionLabel: "Proceed",
  open: true,
  maxWidth: "sm",
  fullScreen: false,
  fullWidth: true,
};
