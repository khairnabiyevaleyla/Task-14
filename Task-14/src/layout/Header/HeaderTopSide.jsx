import React from "react";
import LanguageandCurrency from "./LanguageandCurrency";
import Logo from "./Logo";
import TopSideItems from "./TopSideItems";

const HeaderTopSide = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 border-b border-[#CECECE] pb-10  ">
        <LanguageandCurrency />
        <Logo />
        <TopSideItems />
      </div>
    </div>
  );
};

export default HeaderTopSide;
