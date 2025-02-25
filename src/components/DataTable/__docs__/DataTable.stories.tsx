import React from "react";
import { Meta, Story } from "@storybook/react";
import { rows, columns } from "./gridOrderData";
import DataTable from "../DataTable";
import { DataTableProps } from "../IDataTable";
import { Grid, Paper, Typography } from "../../index";
import { SyncRounded } from "@mui/icons-material";
// Default metadata for the story
export default {
  title: "Components/DataTable", // Title that will appear in Storybook's sidebar
  component: DataTable, // Component to showcase in the story
} as Meta;

// Template to generate a story for BasicChips component
const Template: Story<DataTableProps> = (args) => <DataTable {...args} />;

const DataTableTemplate: Story<DataTableProps> = (args) => (
  <DataTable {...args} />
);
// Default story for BasicChips component with sample props
export const Default = DataTableTemplate.bind({});

Default.args = {
  rows,
  columns,
};

const FooterToolbar = () => (
  <Grid
    direction="row"
    sx={{
      marginLeft: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <SyncRounded />
    <Typography>Synced 4 min ago</Typography>
  </Grid>
);

// A story demonstrating chips in a column direction
export const Custrom = Template.bind({});
Custrom.args = {
  rows,
  columns,
  footerToolbar: <FooterToolbar />,
};
