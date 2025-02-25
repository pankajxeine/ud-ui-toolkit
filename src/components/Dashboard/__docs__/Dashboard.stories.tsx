import React from "react";
import { Meta, Story } from "@storybook/react";
import { Box } from "../../Box";
import { Paper } from "../../index";
import { Grid } from "../../Grid";
import { Typography } from "../../Typography";
import StatisticsSection from "../StatisticsSection";
import CalendarSection from "../CalendarSection";
import { rows, columns } from "../gridData";
import { Button } from "../../index";
import { DataTable } from "../../index";

// Default export with metadata for Storybook
export default {
  title: "Components/Home",
  component: CalendarSection,
} as Meta<typeof CalendarSection>;

// Define your Story
export const Default: Story<typeof CalendarSection> = () => {
  // Sample KPI data passed to StatisticsSection
  const kpiData = [
    { title: "Total Cases Established", statisticNumber: 26, statisticsPercentage: "", color: "#e3f2fd" },
    { title: "Cases Established time", statisticNumber: 24, statisticsPercentage: 92, color: "#e8f5e9" },
    { title: "Cases Established Late", statisticNumber: 2, statisticsPercentage: 8, color: "#ffebee" },
  ];

  return (
    <Grid container spacing={3}>
      {/* Left section (KPI + MyWork) */}
      <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8 }}>
        {/* KPI Section */}
        <Paper elevation={1} sx={{ padding: 2, marginBottom: 3 }}>
          <StatisticsSection sectionTitle="KPI" kpiData={kpiData} />
        </Paper>

        {/* MyWork Section with Create New Application Button */}
        <Paper elevation={1} sx={{ padding: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              MyWork
            </Typography>
            <Button variant="contained" color="primary">
              Create New Application
            </Button>
          </Box>
          <DataTable rows={rows} columns={columns} pageSize={10} />
        </Paper>
      </Grid>

      {/* Right section (Calendar) */}
      <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }} sx={{ position: 'relative' }}>
        <Paper elevation={1} sx={{ padding: 2, marginBottom: 3, height: '100%', overflow: 'auto', width: '100%' }}>
          <CalendarSection />
        </Paper>
      </Grid>
    </Grid>
  );
};
