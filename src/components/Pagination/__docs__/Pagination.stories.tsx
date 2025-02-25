import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Pagination, PaginationItem, TablePagination } from "..";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

export const BasicPagination: Story = () => (
  <Pagination count={10} />
);

export const OutlinedPagination: Story = () => (
  <Pagination count={10} variant="outlined" />
);

export const RoundedPagination: Story = () => (
  <Pagination count={10} shape="rounded" />
);

export const PaginationSize: Story = () => (
  <div>
    <Pagination count={10} size="small" />
    <Pagination count={10} size="medium" style={{ marginTop: "1rem" }} />
    <Pagination count={10} size="large" style={{ marginTop: "1rem" }} />
  </div>
);

export const TablePaginationExample: Story = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export const PaginationWithItems: Story = () => (
  <Pagination
    count={10}
    renderItem={(item) => (
      <PaginationItem
        {...item}
        style={{
          border: "1px solid #1976d2",
          borderRadius: "50%",
          padding: "0.5rem",
        }}
      />
    )}
  />
);


export const ControlledPagination: Story = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination
      count={10}
      page={page}
      onChange={handleChange}
      color="primary"
    />
  );
};
