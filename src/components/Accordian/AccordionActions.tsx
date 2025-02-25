import {
  AccordionActions as MuiAccordionActions,
  AccordionActionsProps,
} from "@mui/material";

const AccordionActions = (props: AccordionActionsProps) => {
  return <MuiAccordionActions {...props}>{props.children}</MuiAccordionActions>;
};

export default AccordionActions;
