// ud-ui-toolkit
import {
    Box,
    Chip,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from "@mui/material";
import React from "react";
import { MultiSelectWrapperProps } from "./IMultiSelect";

const MultiSelectWrapper: React.FC<MultiSelectWrapperProps> = ({
    label,
    options,
    helperText,
    selectedValues,
    onChange,
    ...rest
}) => {
    const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
        const value = event.target.value as unknown;
        const newValue =
            typeof value === "string" ? value.split(",") : (value as string[]);
        onChange(newValue);
    };

    return (
        <Select
            multiple
            //@ts-ignore
            value={selectedValues || []}
            onChange={handleChange}
            displayEmpty
            renderValue={(selected) => {
                if (!selected || selected.length === 0) {
                    return (
                        <Typography sx={{ fontSize: "14px", fontWeight: selectedValues.length > 0 ? 600 : "normal", textTransform: "capitalize" }}>
                            {label}
                        </Typography>
                    );
                }
                return (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "16px",
                            padding: "4px 0px",
                        }}
                    >
                        <Typography sx={{ fontSize: "14px", fontWeight: selectedValues.length > 0 ? 600 : "normal", color: "#1976d2", textTransform: "capitalize" }}>
                            {label}
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#1976d2", marginLeft: 1 }}>
                            {selected[0]}
                        </Typography>
                        {selected.length > 1 && (
                            <Chip
                                label={`+${selected.length - 1}`}
                                sx={{
                                    backgroundColor: "#1976d2",
                                    color: "white",
                                    fontWeight: "bold",
                                    height: 22,
                                    borderRadius: "16px",
                                    marginLeft: 1,
                                    marginRight: 1,
                                    fontSize: "12px",
                                }}
                                size="small"
                            />
                        )}
                    </Box>
                );
            }}
            sx={(theme) => ({
                minWidth: 160,
                backgroundColor: selectedValues.length > 0
                    ? "#E3ECFC"
                    : theme.palette.mode === "light"
                        ? "#dddddd"
                        : "#505050",
                "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    padding: selectedValues.length > 0
                        ? "5px 24px 5px 12px !important"
                        : "8px 12px !important",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },
                "&.MuiFilledInput-root::before, &.MuiFilledInput-root::after": {
                    display: "none",
                },
                "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                },
                "& .MuiSvgIcon-root": {
                    right: 8,
                    color: selectedValues.length > 0 ? "#1976d2" : "#888",
                    transition: "color 0.3s ease-in-out",
                },
            })}


            {...rest}
        >
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    );
};

export default MultiSelectWrapper;
