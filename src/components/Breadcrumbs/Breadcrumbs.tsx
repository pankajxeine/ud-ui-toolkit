
import Breadcrumbs, { BreadcrumbsProps } from "@mui/material/Breadcrumbs";

const BreadcrumbsBasic = ({ children, ...props }: BreadcrumbsProps) => {
    return <Breadcrumbs {...props} >{children} </Breadcrumbs>;
};

export default BreadcrumbsBasic;
