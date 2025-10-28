// ud-ui-toolkit
import MUILoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { LoadingButtonProps } from "./types";

const LoadingButtonComponent: React.FC<LoadingButtonProps> = ({ children, ...props }) => {
    return <MUILoadingButton {...props}>{children}</MUILoadingButton>;
};

export default LoadingButtonComponent;
