// ud-ui-toolkit
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { CustomSwipeableDrawerProps } from "./types";

const SwipeableDrawerBasic = ({ children, ...props }: CustomSwipeableDrawerProps) => {
    return <SwipeableDrawer {...props}> {children} </SwipeableDrawer>;
};

export default SwipeableDrawerBasic;
