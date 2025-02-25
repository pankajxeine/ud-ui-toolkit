import React from "react";
import { ComponentStory, Meta } from "@storybook/react";

import { Tooltip } from "../index";
import { Grid } from "../../Grid";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = () => (
  <Grid container spacing={2}>
    <Tooltip title="Tooltip 1">
      <span> Tooltip 1</span>
    </Tooltip>
  </Grid>
);
