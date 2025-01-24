import React, { useState } from "react";

const SearchInput = ({ data, setFilteredData }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchItem(searchTerm);

    const filteredItems = data.filter((item) =>
      item.productname.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredItems);
  };

  return (
    <div className="search-box mb-6">
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Search"
        className="border rounded-md p-2 w-full search-input"
      />
    </div>
  );
};

export default SearchInput;
