import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ count, page, handleChange }) => {
  return (
    <>
      <MuiPagination count={count} page={page} onChange={handleChange} />
    </>
  );
};

export default Pagination;
