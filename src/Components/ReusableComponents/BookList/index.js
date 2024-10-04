import React from "react";
import { BookCard } from "../BookCard";
import { useNavigate } from "react-router-dom";

const BookList = ({ bookList }) => {
  const navigate = useNavigate();

  const handleOnClick = (bookId) => {
    navigate(`/book-details/${bookId}`);
  };

  return (
    <>
      {bookList.length > 0 ? (
        bookList.map((eachBook) => (
          <div
            key={eachBook.id}
            onClick={() => handleOnClick(eachBook.id)}
            className="bg-white shadow-lg rounded-lg p-4 mx-1 w-full sm:w-1/2 lg:w-1/3"
          >
            <BookCard book={eachBook} />
          </div>
        ))
      ) : (
        <p className="mt-20">No books found.</p>
      )}
    </>
  );
};

export default BookList;
