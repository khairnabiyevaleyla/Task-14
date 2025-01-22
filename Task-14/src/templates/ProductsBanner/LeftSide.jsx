import React from "react";

const LeftSide = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <img
          src="https://flone.jamstacktemplates.dev/assets/img/banner/banner-32.png"
          className="w-full h-full object-contain custom-image"
        />
        <div className="absolute top-[8%] left-[8%]">
          <span className="text-[18px] sm:text-[16px] md:text-[18px] text-[#ed59a0] font-normal">
            -20% Off
          </span>
          <h2 className="text-[30px] sm:text-[40px] md:text-[55px] text-[#ed59a0] font-bold">
            NEW TULIP
          </h2>
          <p className="text-[20px] sm:text-[22px] md:text-[24px] text-[#000] tracking-[2px] sm:tracking-[3px] md:tracking-[4.5px] mb-5">
            Best for your Mind.
          </p>
          <button className="product-btn custom-transition hover:bg-customPurple px-4 py-2 sm:px-6 sm:py-3">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
