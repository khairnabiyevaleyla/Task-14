import React from "react";
import HeaderTopSide from "./HeaderTopSide";
import HeaderBottomSide from "./HeaderBottomSide";

const Header = () => {
  const menuElements = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icon: <i className="ri-arrow-down-s-line"></i>,
    },
    {
      id: 2,
      name: "Shop",
      url: "/",
      icon: <i className="ri-arrow-down-s-line"></i>,
    },
    {
      id: 3,
      name: "Collection",
      url: "/",
    },
    {
      id: 4,
      name: "Pages",
      url: "/",
      icon: <i className="ri-arrow-down-s-line"></i>,
    },
    {
      id: 5,
      name: "Blog",
      url: "/",
      icon: <i className="ri-arrow-down-s-line"></i>,
    },
    {
      id: 6,
      name: "Contact Us",
      url: "/",
    },
  ];

  return (
    <div className="bg-[#F3CFD3] p-5">
      <HeaderTopSide />
      <HeaderBottomSide items={menuElements} />
    </div>
  );
};

export default Header;
