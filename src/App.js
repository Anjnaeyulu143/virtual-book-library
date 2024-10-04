import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import BookDetailsPage from "./Components/BookDetailsPage";
import MyLibraryPage from "./Components/MyLibraryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-details/:id" element={<BookDetailsPage />} />
        <Route path="/books-library" element={<MyLibraryPage />} />
      </Routes>
    </>
  );
}

export default App;
