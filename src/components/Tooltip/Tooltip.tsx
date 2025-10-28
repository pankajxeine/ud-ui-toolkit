// ud-ui-toolkit
import { Tooltip as MUITooltip } from "@mui/material";
import { CustomTooltipProps } from "./index";

const Tooltip = ({ children, ...rest }: CustomTooltipProps) => (
  <MUITooltip {...rest}>{children}</MUITooltip>
);

export default Tooltip;
