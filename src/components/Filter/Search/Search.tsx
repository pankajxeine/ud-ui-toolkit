// ud-ui-toolkit
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SearchWrapperProps } from "./ISearch";

const SearchWrapper: React.FC<SearchWrapperProps> = ({
  placeholder = "Search",
  value = "",
  onSearch,
  fullWidth = false,
  size = "medium",
  disabled = false,
  sx,
}) => {
  const [searchTerm, setSearchTerm] = useState(value);

  // Sync local state when value prop changes
  useEffect(() => {
    setSearchTerm(value || "");
  }, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.length >= 3 || searchTerm === "") {
        onSearch(searchTerm);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm, onSearch]);

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      sx={sx}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchWrapper;
