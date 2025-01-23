import React, { useState, useEffect } from "react";
import ProductsCards from "./ProductsCards";
import { getAPI } from "../../http/api";
import ReactPaginate from "react-paginate";

const FeautredProducts = () => {
  const [showData, setShowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    getAPI("/productscards", (data) => {
      setShowData(data);
    });
  }, []);

  if (!showData || showData.length === 0) {
    return <div>Loading...</div>;
  }

  const offset = currentPage * itemsPerPage;
  const currentData = showData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(showData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container">
      <h3 className="text-center text-[#010101] text-[48px] mb-5">
        Featured Product
      </h3>
      <ul className="flex flex-row justify-center gap-10 mb-10">
        <li className="text-[#ed59a0] text-[18px] font-medium cursor-pointer">
          New Arrivals
        </li>
        <li className="text-[#000000] text-[18px] font-medium cursor-pointer custom-transtion hover:text-[#ed59a0]">
          Best Sellers
        </li>
        <li className="text-[#000000] text-[18px] font-medium cursor-pointer custom-transtion hover:text-[#ed59a0]">
          Sale Items
        </li>
      </ul>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {currentData.map((card, index) => (
          <ProductsCards key={index} {...card} />
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        {" "}
        <ReactPaginate
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="flex items-center gap-2"
          activeClassName="active-page-btn  text-white rounded-full"
          pageClassName="bg-white page-btn text-customPurple w-[40px] h-[40px]  flex justify-center items-center rounded-full  cursor-pointer custom-transition hover:text-white hover:bg-customPurple"
          renderOnZeroPageCount={null}
          previousLabel={null}
          nextLabel={null}
        />
      </div>
    </div>
  );
};

export default FeautredProducts;
