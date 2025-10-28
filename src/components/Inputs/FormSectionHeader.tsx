// ud-ui-toolkit
import { InputFieldProps } from "../../types/InputProps";
import { Typography } from "../Typography";

const FormSectionHeader = (props: InputFieldProps) => {
  const { value } = props;
  return <Typography variant="subtitle2" children={value} />;
};

export default FormSectionHeader;
