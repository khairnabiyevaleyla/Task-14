import React, { useState, useEffect } from "react";
import { getAPI } from "../../http/api";

const FlowersCards = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    getAPI("/flowerscards", (data) => {
      setShowData(data);
    });
  }, []);

  if (!showData || showData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {showData.map((card, index) => (
          <div key={index} className="relative overflow-hidden cursor-pointer">
            <img
              src={card.mainimage}
              alt={card.title}
              className="w-full h-full object-contain custom-image"
            />
            <div className="absolute top-[8%] left-[6%]">
              <h2 className="text-[36px] text-[#915342] second-font font-semibold">
                {card.title}
              </h2>
              <p className="text-[16px] text-[#000] second-font font-semibold mb-5">
                Starting at{" "}
                <span className="text-[#915342] second-font">
                  ${card.price}
                </span>
              </p>
              <i className="ri-arrow-right-long-line text-[#ed59a0] custom-transition cursor-pointer font-bold border-2 border-[#ed59a0] p-1 rounded-full hover:text-customPurple hover:border-customPurple"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowersCards;
