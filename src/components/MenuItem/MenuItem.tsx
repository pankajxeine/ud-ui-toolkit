// ud-ui-toolkit
import MenuItem from "@mui/material/MenuItem";
import { MenuItemWrapperProps } from "./IMenuItemProps";

const MenuItemWrapper = ({ children, ...rest }: MenuItemWrapperProps) => {
  return <MenuItem {...rest}>{children}</MenuItem>;
};

export default MenuItemWrapper;
