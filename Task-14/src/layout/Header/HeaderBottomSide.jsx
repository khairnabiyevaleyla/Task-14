import React from "react";

const HeaderBottomSide = ({ items }) => {
  return (
    <div className="container hidden sm:block md:block lg:block xl:block">
      <div>
        {items && items.length > 0 ? (
          <ul className="flex flex-row gap-8 justify-center items-center max-sm:flex-col max-sm:gap-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="text-customGray text-[15px] font-[500] custom-transition hover:text-customPurple"
              >
                <a
                  href={item.url}
                  aria-label={item.name}
                  className="flex items-center gap-2"
                >
                  <span>{item.icon}</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-customGray">No items to display</p>
        )}
      </div>
    </div>
  );
};

export default HeaderBottomSide;
