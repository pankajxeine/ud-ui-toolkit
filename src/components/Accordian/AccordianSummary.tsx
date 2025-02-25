'use client';
import {
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps,
} from "@mui/material";

const AccordionSummary = (props: AccordionSummaryProps) => {
  return <MuiAccordionSummary {...props}>{props.children}</MuiAccordionSummary>;
};

export default AccordionSummary;
