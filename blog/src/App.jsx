import { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import AddEditBlog from "./pages/AddEditBlog";

export const DarkMode = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={
          darkMode
            ? "bg-gray-900 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/new" element={<AddEditBlog />} />
          <Route path="/edit/:id" element={<AddEditBlog />} />
        </Routes>
      </div>
    </DarkMode.Provider>
  );
}

export default App;
