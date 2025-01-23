import React from "react";

const ProductsCards = ({
  mainimage,
  hoverimage,
  price,
  discountprice,
  discount,
  title,
  productname,
}) => {
  return (
    <div className="w-full h-full">
      <div>
        <div className="cardImage cursor-pointer">
          <img src={mainimage} />
          <div>
            <div className="pinItem ">
              <p className="text-[#ed59a0] font-medium text-[13px]">
                -{discount}%
              </p>
              <h2 className="font-medium text-[13px] text-customPurple">
                {title}
              </h2>
            </div>
          </div>
          <div className="HoverImg">
            <div className="w-full h-full">
              <img src={hoverimage} />

              <div className="hoverImgItem">
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 flex items-center rounded-full justify-center custom-transition cursor-pointer bg-customPurple hover:bg-[#ed59a0]">
                    {" "}
                    <i className="ri-shopping-cart-2-line text-md text-white"></i>
                  </div>
                  <div className="w-10 h-10 flex items-center rounded-full justify-center custom-transition cursor-pointer bg-customPurple hover:bg-[#ed59a0]">
                    {" "}
                    <i className="ri-eye-fill text-md text-white"></i>
                  </div>
                  <div className="w-10 h-10 flex items-center rounded-full justify-center custom-transition cursor-pointer bg-customPurple hover:bg-[#ed59a0]">
                    {" "}
                    <i className="ri-git-pull-request-line text-md text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-[16px] text-[#000] font-normal cursor-pointer custom-transition hover:text-customPurple">
            {" "}
            {productname}
          </p>
          <h1 className="text-[15px]">
            €{discountprice} -{" "}
            <span className=" text-[#ed59a0] line-through"> €{price}</span>
          </h1>
        </div>
        <div>
          <i className="ri-heart-line text-[18px] text-customGray custom-transition cursor-pointer hover:text-customPurple"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
