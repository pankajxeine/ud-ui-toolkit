import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { LinearProgress } from '../index'
export default {
  title: "Components/LinearProgress",
  component: LinearProgress,
} as Meta<typeof LinearProgress>;

export const Basic: ComponentStory<typeof LinearProgress> = () => (
  <Stack spacing={2} maxWidth={300}>
    <LinearProgress />
  </Stack>
);
