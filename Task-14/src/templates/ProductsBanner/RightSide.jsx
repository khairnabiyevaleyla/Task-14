import React from "react";

const RightSide = () => {
  return (
    <div className=" flex flex-wrap gap-5">
      <div className="">
        <div className="relative overflow-hidden">
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/banner/banner-33.png"
            className="w-full h-full object-contain custom-image"
          />
          <div className="absolute top-[8%] left-[6%]">
            <h2 className="text-[30px] sm:text-[40px] md:text-[30px] text-[#11111] font-bold">
              PINK TULIP
            </h2>
            <p className="text-[18px] sm:text-[22px] md:text-[18px] text-[#000] mb-5">
              Starting at <span className="text-[#ed59a0]">$99.00</span>
            </p>
            <i className="ri-arrow-right-long-line text-[#ed59a0] custom-transition cursor-pointer font-bold border-2 border-[#ed59a0] p-1 rounded-full hover:text-customPurple hover:border-customPurple"></i>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative overflow-hidden">
          <img
            src="https://flone.jamstacktemplates.dev/assets/img/banner/banner-34.png"
            className="w-full h-full object-contain custom-image"
          />
          <div className="absolute bottom-[20%] right-[20%]">
            <h2 className="text-[30px] sm:text-[40px] md:text-[30px] text-[#11111] font-bold">
              PINK TULIP
            </h2>
            <p className="text-[18px] sm:text-[22px] md:text-[18px] text-[#000] mb-5">
              Starting at <span className="text-[#ed59a0]">$99.00</span>
            </p>
            <i className="ri-arrow-right-long-line text-[#ed59a0] custom-transition cursor-pointer font-bold border-2 border-[#ed59a0] p-1 rounded-full hover:text-customPurple hover:border-customPurple"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
