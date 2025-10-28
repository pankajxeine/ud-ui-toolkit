// ud-ui-toolkit
import Grid from "@mui/material/Grid2";
import { GridProps } from "./types";

const GridBasic = ({ children, direction, container, ...props }: GridProps) => {
  return (
    <Grid container={container || !!direction} direction={direction} {...props}>
      {children}
    </Grid>
  );
};

export default GridBasic;
