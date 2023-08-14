"use client";

import { SSRProvider } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

function Paginations() {
  return (
    <SSRProvider>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </SSRProvider>
  );
}

export default Paginations;
