"use client";

import { SSRProvider } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

type PaginationType = {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  onChange: (pageNumber: number) => void;
};

function Paginations(props: PaginationType) {
  const { activePage, pageRangeDisplayed, onChange } = props;
  const handlePageClick = (pageNumber: number) => {
    console.log("clicked");
    if (pageNumber !== activePage) {
      onChange(pageNumber);
    }
  };
  let active = props.activePage;
  let items = [];
  for (let number = 1; number <= pageRangeDisplayed; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => handlePageClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
}

export default Paginations;
