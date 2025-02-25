import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";

const AutocompleteBasic = ({
  ...props
}: AutocompleteProps<any, any, any, any>) => {
  return <Autocomplete {...props} />;
};

export default AutocompleteBasic;
