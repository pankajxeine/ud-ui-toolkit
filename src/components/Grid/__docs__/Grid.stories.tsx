import React from "react";
import { ComponentStory, Meta } from "@storybook/react-vite";
import { Grid } from '../index'

export default {
  title: "Components/Grid",
  component: Grid,
} as Meta<typeof Grid>;

export const BasicGrid: ComponentStory<typeof Grid> = () => (
  <Grid container spacing={2}>
    <Grid size={8}>
      <h2>size=8</h2>
    </Grid>
    <Grid size={4}>
      <h2>size=4</h2>
    </Grid>
    <Grid size={4}>
      <h2>size=4</h2>
    </Grid>
    <Grid size={8}>
      <h2>size=8</h2>
    </Grid>
  </Grid>
);
