import React from "react";
import Radio from "@mui/material/Radio";
import { RadioWrapperProps } from "./IRadio";

const RadioWrapper: React.FC<RadioWrapperProps> = ({ ...rest }) => {
  return <Radio {...rest} />;
};

export default RadioWrapper;
