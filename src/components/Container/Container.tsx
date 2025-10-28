// ud-ui-toolkit
import Container, { ContainerProps } from "@mui/material/Container";

const ContainerBasic = ({ children, ...props }: ContainerProps) => {
    return <Container {...props} >{children} </Container>;
};

export default ContainerBasic;
