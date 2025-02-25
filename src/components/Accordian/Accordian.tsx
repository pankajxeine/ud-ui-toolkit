import { Accordion as AccordionComponent, AccordionProps } from "@mui/material";

const Accordion = (props: AccordionProps) => {
  return <AccordionComponent {...props}>{props.children}</AccordionComponent>;
};

export default Accordion;
