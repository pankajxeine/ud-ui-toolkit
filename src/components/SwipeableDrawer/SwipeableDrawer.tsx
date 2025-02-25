import { CustomSwipeableDrawerProps } from "./types";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const SwipeableDrawerBasic = ({ children, ...props }: CustomSwipeableDrawerProps) => {
    return <SwipeableDrawer {...props}> {children} </SwipeableDrawer>;
};

export default SwipeableDrawerBasic;
