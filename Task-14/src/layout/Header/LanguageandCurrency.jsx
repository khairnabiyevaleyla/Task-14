import React from "react";

const LanguageandCurrency = () => {
  return (
    <div>
      <div>
        <ul className="text-[14px] text-customGray flex flex-row gap-10 items-center justify-center ">
          <li className="cursor-pointer relative language-currency-style custom-transition main-menu ">
            <span className=" hover:text-customPurple">
              English <i className="ri-arrow-down-s-line text-[16px]"></i>
            </span>
            <ul className="sub-menu">
              <li className=" hover:text-customPurple">English</li>
              <li className=" hover:text-customPurple">French</li>
              <li className=" hover:text-customPurple">Germany</li>
            </ul>
          </li>
          <li className="cursor-pointer relative language-currency-style custom-transition main-menu">
            <span className=" hover:text-customPurple">
              EUR <i className="ri-arrow-down-s-line text-[16px]"></i>
            </span>
            <ul className="sub-menu">
              <li className=" hover:text-customPurple">USD</li>
              <li className=" hover:text-customPurple">EUR</li>
              <li className=" hover:text-customPurple">GBP</li>
            </ul>
          </li>
          <li>Call Us 3965410</li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageandCurrency;
