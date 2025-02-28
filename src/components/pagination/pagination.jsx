import React from "react";
import "./pagination.css";
export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  return (
    <div className="pagination-container d-flex justify-content-center mt-3">
      <button
        className="btn btn-primary mx-1"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <button
          key={index}
          className={`btn mx-1 ${currentPage === startPage + index ? "btn-dark" : "btn-light"}`}
          onClick={() => onPageChange(startPage + index)}
        >
          {startPage + index}
        </button>
      ))}

      <button
        className="btn btn-primary mx-1"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
