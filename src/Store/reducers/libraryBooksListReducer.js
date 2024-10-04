import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  libraryBooksList: [],
};

export const libraryBooksListReducer = createSlice({
  name: "libraryBooksList",
  initialState,
  reducers: {
    addBookToLibrary: (state, action) => {
      const bookExists = state.libraryBooksList.some(
        (book) => book.id === action.payload.id
      );

      if (!bookExists) {
        state.libraryBooksList.push(action.payload);
      }
    },
    removeBookFromLibrary: (state, action) => {
      // Create a new array excluding the removed book
      state.libraryBooksList = state.libraryBooksList.filter(
        (book) => book.id !== action.payload
      );
    },
  },
});

export const { addBookToLibrary, removeBookFromLibrary } =
  libraryBooksListReducer.actions;

export default libraryBooksListReducer.reducer;
