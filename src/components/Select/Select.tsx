// ud-ui-toolkit
import { Select, SelectProps } from "./ISelect";

const SelectWrapper = ({ children, isChip, helperText, ...rest }: SelectProps & { isChip?: boolean }) => {
  return <Select {...rest}>{children}</Select>;
};

export default SelectWrapper;
