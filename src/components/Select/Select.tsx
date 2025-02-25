
import { Select, SelectProps } from "./ISelect";

const SelectWrapper = ({ children, ...rest }: SelectProps) => {
  return <Select {...rest}> {children} </Select>;
};

export default SelectWrapper;
