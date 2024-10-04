import { useEffect, useState } from "react";

const useBookSearch = (booksList) => {
  const [filteredBooks, setFilteredBooks] = useState(booksList);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setSearchTerm(searchInput);

    const filtered = booksList.filter(
      (book) =>
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput) ||
        book.genre.toLowerCase().includes(searchInput)
    );

    setFilteredBooks(filtered);
  };

  // Clear search term and reset filtered books when booksList changes
  useEffect(() => {
    setFilteredBooks(booksList);
  }, [booksList]); // Run effect when booksList changes

  return {
    searchTerm,
    filteredBooks,
    handleSearch,
  };
};

export default useBookSearch;
