import {
  AccordionActionsProps,
  AccordionActions as MuiAccordionActions,
} from "@mui/material";

const AccordionActions = (props: AccordionActionsProps) => {
  return <MuiAccordionActions {...props}>{props.children}</MuiAccordionActions>;
};

export default AccordionActions;
