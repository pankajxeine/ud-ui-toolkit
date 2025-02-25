import { ModalOwnProps } from "@mui/material";

export interface IModal extends ModalOwnProps {
  title: string;
  bodyContent: string;
  secondaryActionLabel: string;
  PrimaryActionLabel: string;
}
