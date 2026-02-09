import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { DarkMode } from "../App";
function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold">
        Blogify
      </Link>

      <Link
        to="/new"
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        New Post
      </Link>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 border rounded dark:text-white"
      >
        {darkMode ? "☀️Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default Navbar;
