"use client";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const total = Number(totalPages);

  if (isNaN(total) || total <= 1) return null;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="w-full flex items-center justify-between">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" px-4 py-3 transition-all duration-200 hover:bg-green-100 active:bg-green-200 active:scale-95 rounded-md bg-gray-100 "
      >
        <FaLongArrowAltLeft className="text-3xl text-green-500 " />
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" px-4 py-3 transition-all duration-200 hover:bg-green-100 active:bg-green-200 active:scale-95 rounded-md bg-gray-100 "
      >
        <FaLongArrowAltRight className="text-3xl text-green-500 " />
      </button>
    </div>
  );
}
