import React from "react";
import MUILoadingButton from "@mui/lab/LoadingButton";
import { LoadingButtonProps } from "./types";

const LoadingButtonComponent: React.FC<LoadingButtonProps> = ({ children, ...props }) => {
    return <MUILoadingButton {...props}>{children}</MUILoadingButton>;
};

export default LoadingButtonComponent;
