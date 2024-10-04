import { configureStore } from "@reduxjs/toolkit";
import booksListReducer from "./reducers/booksListReducer";
import libraryBooksListReducer from "./reducers/libraryBooksListReducer";

export const store = configureStore({
  reducer: {
    booksListState: booksListReducer,
    libraryBooksState: libraryBooksListReducer,
  },
});
