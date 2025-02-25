import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

export interface TypographyProps extends MuiTypographyProps { }
/**
 *
 * @param TypographyProps
 * @returns
 */

const Typography = ({ children, ...rest }: TypographyProps) => (
  <MuiTypography {...rest}>{children}</MuiTypography>
);

export default Typography;
