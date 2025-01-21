import React from "react";

const HeaderBottomSide = ({ items }) => {
  return (
    <div className="container">
      <div className="">
        <ul className="flex flex-row gap-8 justify-center items-center">
          {items &&
            items.map((item, index) => (
              <React.Fragment key={index}>
                <li className="text-customGray text-[15px] font-[500] custom-transition hover:text-customPurple">
                  <a href={item.url}>{item.name}</a>
                  <span>{item.icon}</span>
                </li>
              </React.Fragment>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottomSide;
