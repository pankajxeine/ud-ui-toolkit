// ud-ui-toolkit
import Radio from "@mui/material/Radio";
import React from "react";
import { RadioWrapperProps } from "./IRadio";

const RadioWrapper: React.FC<RadioWrapperProps> = ({ ...rest }) => {
  return <Radio {...rest} />;
};

export default RadioWrapper;
