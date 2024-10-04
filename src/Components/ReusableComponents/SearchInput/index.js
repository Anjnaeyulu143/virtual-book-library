import React from "react";

const SearchInput = ({ searchTerm, handleSearch }) => {
  return (
    <div className="fixed top-16 h-20 w-full bg-white flex items-center justify-center">
      <input
        type="text"
        placeholder="Search by title, author, or genre"
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded-lg w-[80%]"
      />
    </div>
  );
};

export default SearchInput;
