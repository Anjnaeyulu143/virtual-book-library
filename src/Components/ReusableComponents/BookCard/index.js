import React from "react";
import { useDispatch } from "react-redux";
import { removeBookFromLibrary } from "../../../Store/reducers/libraryBooksListReducer";

export const BookCard = ({ book }) => {
  const { title, author, genre, rating, addedInLibrary, id } = book;
  const dispatch = useDispatch();

  console.log("AddedInLibrary:", addedInLibrary);

  const handleOnRemove = (e, bookId) => {
    e.stopPropagation();
    console.log("Removing book with id:", bookId);

    // Remove the book from the library
    dispatch(removeBookFromLibrary(bookId));
  };

  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">Author: {author}</p>
      <p className="text-gray-700">Genre: {genre}</p>
      <p className="text-gray-700">Rating: {rating}</p>
      {addedInLibrary !== undefined && (
        <button
          className="w-full h-10 mt-4 bg-red-400 text-white font-bold"
          onClick={(e) => handleOnRemove(e, id)}
        >
          Remove From Library
        </button>
      )}
    </div>
  );
};
