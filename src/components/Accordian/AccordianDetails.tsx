'use client';
import {
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps,
} from "@mui/material";

const AccordionDetails = (props: AccordionDetailsProps) => {
  return <MuiAccordionDetails {...props}>{props.children}</MuiAccordionDetails>;
};

export default AccordionDetails;
