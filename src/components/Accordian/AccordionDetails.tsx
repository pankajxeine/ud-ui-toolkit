import {
  AccordionDetailsProps,
  AccordionDetails as MuiAccordionDetails,
} from "@mui/material";

const AccordionDetails = (props: AccordionDetailsProps) => {
  return <MuiAccordionDetails {...props}>{props.children}</MuiAccordionDetails>;
};

export default AccordionDetails;
