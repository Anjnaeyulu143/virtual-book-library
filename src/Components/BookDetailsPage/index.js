import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addBookToLibrary } from "../../Store/reducers/libraryBooksListReducer";
import { Header } from "../Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetailsPage = () => {
  const { booksList } = useSelector((state) => state.booksListState);
  const { libraryBooksList } = useSelector((state) => state.libraryBooksState); // Get the library books state
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  const bookDetails = booksList.find((book) => book.id.toString() === id);

  const { title, author, genre, rating, publication_year, description } =
    bookDetails;

  console.log("Book Details", bookDetails);

  const handleAddBookToLibrary = () => {
    // Check if the book is already in the library
    const isBookAlreadyInLibrary = libraryBooksList.some(
      (book) => book.id === bookDetails.id
    );

    if (isBookAlreadyInLibrary) {
      // If the book is already added, show a warning toast
      toast.warn(`${title} is already in your library.`);
    } else {
      // Add book to My Library and show success toast
      dispatch(addBookToLibrary({ ...bookDetails, addedInLibrary: true }));
      toast.success(`${title} has been added to your library!`);
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold">Details</h2>
          <p className="mt-2">
            <strong>Author:</strong> {author}
          </p>
          <p className="mt-2">
            <strong>Genre:</strong> {genre}
          </p>
          <p className="mt-2">
            <strong>Rating:</strong> {rating} / 5
          </p>
          <p className="mt-2">
            <strong>Publication Year:</strong> {publication_year}
          </p>
          <p className="mt-2">
            <strong>Description:</strong> {description}
          </p>

          <button
            className="w-40 h-10 mt-4 bg-indigo-600 text-white font-bold"
            onClick={handleAddBookToLibrary}
          >
            Add to Library
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default BookDetailsPage;
