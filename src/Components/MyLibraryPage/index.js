import React from "react";
import { useSelector } from "react-redux";

import BookList from "../ReusableComponents/BookList";
import SearchInput from "../ReusableComponents/SearchInput";
import useBookSearch from "../ReusableComponents/UseBookSearch";
import { Header } from "../Header";

const MyLibraryPage = () => {
  const { libraryBooksList } = useSelector((state) => state.libraryBooksState);
  console.log("LibraryBooksList", libraryBooksList);

  const { searchTerm, filteredBooks, handleSearch } =
    useBookSearch(libraryBooksList);

  console.log("filteredBooks", filteredBooks);

  return (
    <div>
      <Header />
      {/* Fixed Search input */}
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />

      {/* Books flex container */}

      <div className="mt-40 flex flex-wrap justify-center gap-4 mb-20">
        <BookList bookList={filteredBooks} />
      </div>
    </div>
  );
};

export default MyLibraryPage;
