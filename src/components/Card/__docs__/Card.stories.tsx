import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import { Box } from '../../index'
import { Card } from '../../index'
import { CardActions } from '../../index'
import { Button, } from '../../index'
import { CardContent, } from '../../index'
import { Typography } from '../../index'

export default {
  title: "Components/Card",
  component: Card,
} as Meta<typeof Card>;
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const Basic: ComponentStory<typeof Card> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom title="Word of the Day" >
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }} title="adjective" ></Typography>
        <Typography title="well meaning and kindly.">
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="info" variant="contained" size="small"> Test Button</Button>
      </CardActions>
    </Card>
  </Stack>
);
