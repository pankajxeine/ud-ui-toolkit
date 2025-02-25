import { DataGrid, GridPagination } from "@mui/x-data-grid";
import { DataTableProps } from "./IDataTable";
import { Grid } from "../Grid";

export default function DataTable(props: DataTableProps) {
  const {
    rows,
    columns,
    loading = false,
    type = "compact",
    footerToolbar = <></>,
    disableColumnResize = false,
    checkboxSelection = false,
    pageSize = 20,
    pageSizeOptions = [10, 20, 50],
  } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DataGrid
        checkboxSelection={checkboxSelection}
        rows={rows}
        loading={loading}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
        sx={(theme) => ({
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[700]
              : theme.palette.grey[200],
          "& .MuiDataGrid-cell": {
            borderColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey[700]
                : theme.palette.grey[200],
          },
        })}
        pageSizeOptions={pageSizeOptions}
        disableColumnResize={disableColumnResize}
        density={type}
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: "outlined",
                size: "small",
              },
              columnInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              operatorInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: "outlined",
                  size: "small",
                },
              },
            },
          },
        }}
        slots={{
          pagination: () => (
            <Grid
              container
              width={"100%"}
              direction="row"
              sx={{
                alignItems: "center",
              }}
            >
              {footerToolbar}
              <GridPagination />
            </Grid>
          ),
        }}
      />
    </div>
  );
}
