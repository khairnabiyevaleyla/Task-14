import React from "react";

const TopSideItems = () => {
  return (
    <div>
      <div className="flex justify-end">
        <ul className="flex flex-row gap-4 text-[22px] text-customGray ">
          <li className="custom-transition hover:text-customPurple cursor-pointer">
            <i className="ri-search-line"></i>
          </li>
          <li className="custom-transition hover:text-customPurple cursor-pointer">
            <i className="ri-user-line "></i>
          </li>
          <li className="custom-transition hover:text-customPurple cursor-pointer relative">
            <i className="ri-shuffle-fill"></i>
            <span className="absolute text-sm bg-black text-white w-[21px] h-[21px] rounded-full left-3 bottom-4 text-center">
              0
            </span>
          </li>
          <li className="custom-transition hover:text-customPurple cursor-pointer relative">
            <i className="ri-heart-line"></i>
            <span className="absolute text-sm bg-black text-white w-[21px] h-[21px] rounded-full left-3 bottom-4 text-center">
              0
            </span>
          </li>
          <li className="custom-transition hover:text-customPurple cursor-pointer relative">
            <i className="ri-shopping-bag-2-line"></i>
            <span className="absolute text-sm bg-black text-white w-[21px] h-[21px] rounded-full left-3 bottom-4 text-center">
              0
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopSideItems;
