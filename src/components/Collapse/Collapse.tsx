// ud-ui-toolkit
import Collapse, { CollapseProps } from "@mui/material/Collapse";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CollapseBasic = ({ children, ...props }: CollapseProps) => {
    return <Collapse {...props} >{children}</Collapse>;
};

export default CollapseBasic;