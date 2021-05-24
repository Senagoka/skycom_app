import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <Link onClick={() => paginate(number)} className="nav-link">
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
