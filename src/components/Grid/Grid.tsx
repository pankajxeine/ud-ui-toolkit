// ud-ui-toolkit
import Grid from "@mui/material/Grid";
import { CustomGridProps } from "./types";

const GridBasic = ({ children, direction, container, ...props }: CustomGridProps) => {
  return (
    <Grid container={container || !!direction} direction={direction} {...props}>
      {children}
    </Grid>
  );
};

export default GridBasic;
