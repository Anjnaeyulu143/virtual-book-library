import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { libraryBooksList } = useSelector((state) => state.libraryBooksState);

  return (
    <div className="w-full h-16 bg-indigo-600 text-white fixed top-0 z-50">
      <div className="space-x-6 h-full w-full flex items-center justify-between px-4 font-bold text-xl">
        {/* Home Link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-black/50"
          }
        >
          Home
        </NavLink>

        {/* Library Books Link with Conditional Length Display */}
        <NavLink
          to="/books-library"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-black/50"
          }
        >
          {`My Library${
            libraryBooksList.length > 0 ? ` (${libraryBooksList.length})` : ""
          }`}
        </NavLink>
      </div>
    </div>
  );
};
