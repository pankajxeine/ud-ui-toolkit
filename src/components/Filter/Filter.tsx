// ud-ui-toolkit
import React from "react";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import { FiltersProps } from "./IFilter";
import MultiSelectWrapper from "./MultiSelect/MultiSelect";
import SearchWrapper from "./Search/Search";

const Filters: React.FC<FiltersProps> = ({ filters, showSearch, onFilterChange, onClearFilters }) => {
    const hasFilters = showSearch || Object.keys(filters).length > 0;

    return (
        <Grid container spacing={2} sx={{ marginBottom: 2, alignItems: "center" }}>
            {/* Search Field */}
            {showSearch && (
                <Grid size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <SearchWrapper
                        size="small"
                        value={filters.search?.value || ""}
                        onSearch={(query) => onFilterChange("search", [query])}
                        fullWidth
                        sx={{ width: "50%" }}
                    />
                </Grid>
            )}

            {/* Filter Dropdowns */}
            <Grid container size={{ xs: 12 }} spacing={2} alignItems="center">
                {Object.keys(filters).map((filterKey) => {
                    const filter = filters[filterKey];
                    return filter.type === "select" ? (
                        <Grid key={filterKey} size={{ xs: "auto" }}>
                            <MultiSelectWrapper
                                size="small"
                                variant="filled"
                                label={filterKey}
                                options={filter.options || []}
                                //@ts-ignore
                                selectedValues={filters[filterKey]?.value || []}
                                onChange={(selected) => onFilterChange(filterKey, selected)}
                            />
                        </Grid>
                    ) : null;
                })}

                {/* Clear Filters Button */}
                {hasFilters && (
                    <Grid size={{ xs: "auto" }}>
                        <Button variant="text" onClick={onClearFilters} sx={{ fontWeight: "bold", color: "#1976d2" }}>
                            CLEAR FILTERS
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default Filters;
