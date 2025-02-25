import { GridRowsProp, GridColDef, GridDensity } from "@mui/x-data-grid";

export type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  checkboxSelection?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  disableColumnResize?: boolean;
  footerToolbar?: React.ReactNode;
  type?: GridDensity;
  loading?: boolean;
};
