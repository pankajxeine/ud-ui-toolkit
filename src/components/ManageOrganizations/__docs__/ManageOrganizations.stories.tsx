// ud-ui-toolkit
import EditIcon from "@mui/icons-material/Edit";
import { Chip, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import Filters from "../../Filter/Filter";
import { FilterConfig } from "../../Filter/IFilter";
import Typography from "../../Typography/Typography";

// Table columns
const columns = [
  { field: "name", headerName: "Name", flex: 2 },
  { field: "state", headerName: "State", flex: 2 },
  { field: "type", headerName: "Type", flex: 2 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === "Active" ? "success" : "default"}
        variant="filled"
        size="small"
      />
    ),
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: () => (
      <IconButton color="primary">
        <EditIcon />
        <Typography variant="body2" sx={{ textTransform: "uppercase", ml: 1 }}>
          Edit
        </Typography>
      </IconButton>
    ),
  },
];

// Sample data for Manage Organizations
const allOrganizations = [
  { id: 1, name: "Org A", state: "North Carolina", type: "IT", status: "Active" },
  { id: 2, name: "Org B", state: "Minnesota", type: "Finance", status: "Inactive" },
  { id: 3, name: "Org C", state: "North Carolina", type: "Healthcare", status: "Active" },
  { id: 4, name: "Org D", state: "Minnesota", type: "Retail", status: "Active" },
];

// Extract unique filter values
const getUniqueValues = (field: string) => [...new Set(allOrganizations.map((row) => row[field]))];

// Initial filter configuration
const initialFilterConfig: FilterConfig = {
  search: { type: "text", value: "" },
  state: { type: "select", options: getUniqueValues("state"), value: [] },
  type: { type: "select", options: getUniqueValues("type"), value: [] },
  status: { type: "select", options: getUniqueValues("status"), value: [] },
};

// **Manage Organizations Component**
const ManageOrganizations = () => {
  const [filters, setFilters] = useState(initialFilterConfig);
  const [filteredData, setFilteredData] = useState(allOrganizations);

  // Handle filtering logic
  const handleFilterChange = (filterKey: string, value: string[]) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [filterKey]: { ...prevFilters[filterKey], value } };

      const filteredRows = allOrganizations.filter((row) =>
        Object.keys(updatedFilters).every((key) => {
          const filterValue = updatedFilters[key].value;

          if (!filterValue || filterValue.length === 0) return true;

          // 🔹 **SEARCH LOGIC UPDATED TO CHECK ALL FIELDS**
          if (key === "search") {
            return Object.values(row).some(
              (field) =>
                typeof field === "string" &&
                field.toLowerCase().includes(filterValue[0].toLowerCase())
            );
          }

          return Array.isArray(filterValue) ? filterValue.includes(row[key]) : row[key] === filterValue;
        })
      );

      setFilteredData(filteredRows);
      return updatedFilters;
    });
  };

  const handleClearFilters = () => {
    const resetFilters = Object.keys(initialFilterConfig).reduce((acc, key) => {
      acc[key] = { ...initialFilterConfig[key], value: [] };
      return acc;
    }, {} as FilterConfig);

    setFilters(resetFilters);
    setFilteredData(allOrganizations);
  };



  return (
    <div>
      <h2>Manage Organizations</h2>
      <Filters filters={filters} onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} showSearch={true}
      />
      <DataGrid
        columns={columns}
        rows={filteredData}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            fontWeight: "bold",
            borderBottom: "1px solid #0000001F",
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #0000001F",
          },
        }}
      />

    </div>
  );
};

// **Storybook Export**
export default {
  title: "Screens/ManageOrganizations",
  component: ManageOrganizations,
} as Meta;

const Template: Story = () => <ManageOrganizations />;

export const Default = Template.bind({});
