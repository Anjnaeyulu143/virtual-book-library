import { createSlice } from "@reduxjs/toolkit";

import booksData from "../../utils/booksData.json";

const { books } = booksData;

const initialState = {
  booksList: books,
};

export const booksListReducer = createSlice({
  name: "booksList",
  initialState,
  reducers: {
    // In case if we need to add book

    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },

    // In case if we need to remove book

    removeBook: (state, action) => {
      const index = state.booksList.findIndex(
        (book) => book.id === action.payload
      );
      if (index !== -1) {
        state.booksList.splice(index, 1);
      }
    },
  },
});

export const { addBook, removeBook } = booksListReducer.actions;

export default booksListReducer.reducer;
