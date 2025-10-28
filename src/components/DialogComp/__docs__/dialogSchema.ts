import { IDialog } from "../IDialog";
export const DialogDefault: IDialog = {
  title: "Dialog Title",
  bodycontent: "This is a simple dialog message.",
  secondaryactionlabel: "Cancel",
  primaryactionlabel: "Confirm",
  open: true,
  maxWidth: "sm",
  fullScreen: false,
  fullWidth: true,
};

// Dialog without secondary action
export const DialogWithoutSecondaryAction: IDialog = {
  title: "Dialog without Secondary Action",
  bodycontent: "This dialog only has the primary action.",
  secondaryactionlabel: "",
  primaryactionlabel: "Proceed",
  open: true,
  maxWidth: "sm",
  fullScreen: false,
  fullWidth: true,
};
