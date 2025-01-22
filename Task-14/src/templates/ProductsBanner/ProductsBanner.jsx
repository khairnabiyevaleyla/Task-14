import React from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const ProductsBanner = () => {
  return (
    <div className="container my-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="col-span-1 md:col-span-6">
          <LeftSide />
        </div>
        <div className="col-span-1 md:col-span-6">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
