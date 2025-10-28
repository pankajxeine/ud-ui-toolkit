// ud-ui-toolkit
import MUIButtonBase from "@mui/material/ButtonBase";
import React from "react";
import { ButtonBaseProps } from "./types";

const ButtonBaseComponent: React.FC<ButtonBaseProps> = ({ children, ...props }) => {
    return <MUIButtonBase {...props}>{children}</MUIButtonBase>;
};

export default ButtonBaseComponent;
