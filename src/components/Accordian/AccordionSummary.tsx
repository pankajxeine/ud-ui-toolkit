import {
  AccordionSummaryProps,
  AccordionSummary as MuiAccordionSummary,
} from "@mui/material";

const AccordionSummary = (props: AccordionSummaryProps) => {
  return <MuiAccordionSummary {...props}>{props.children}</MuiAccordionSummary>;
};

export default AccordionSummary;
