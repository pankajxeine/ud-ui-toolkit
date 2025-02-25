import MUITablePagination from "@mui/material/TablePagination";
import { TablePaginationProps } from "./types";

export default function TablePagination(props: TablePaginationProps) {
    return <MUITablePagination {...props} />;
}
