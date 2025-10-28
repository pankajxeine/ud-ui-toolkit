import React, { useState } from "react";
import { Meta, Story } from "@storybook/react-vite";
import Filters from "../Filter";
import { FilterConfig } from "../IFilter";

export default {
  title: "Components/Filters",
  component: Filters,
} as Meta;

const Template: Story = (args) => {
  const [filters, setFilters] = useState<FilterConfig>({
    search: { type: "text", value: [""] },
    status: { type: "select", value: [], options: ["Pending", "Completed", "Cancelled"] },
    category: { type: "select", value: [], options: ["Electronics", "Books", "Clothing"] },
  });

  const handleFilterChange = (filterKey: string, value: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: { ...prevFilters[filterKey], value },
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: { type: "text", value: [""] },
      status: { type: "select", value: [], options: ["Pending", "Completed", "Cancelled"] },
      category: { type: "select", value: [], options: ["Electronics", "Books", "Clothing"] },
    });
  };

  return <Filters filters={filters} showSearch={true} onFilterChange={handleFilterChange} onClearFilters={clearFilters} />;
};

export const Default = Template.bind({});
