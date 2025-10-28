// ud-ui-toolkit
export interface Column {
  field: string;
  headerName: string;
  width?: number;
  renderCell?: (params: any) => JSX.Element;
}

export interface FilterConfig {
  [key: string]: {
    type: "text" | "select";
    value: string;
    options?: string[];
  };
}

export interface FiltersProps {
  filters: FilterConfig;
  showSearch: boolean;
  onFilterChange: (filterKey: string, value: string[]) => void;
  onClearFilters: () => void;
}