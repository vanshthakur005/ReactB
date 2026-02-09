import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog } from "../features/blogs/blogSlice";

const AddEditBlog = () => {
  const { id } = useParams();
  const existingBlog = useSelector((state) =>
    state.blogs.list.find((b) => b.id === id),
  );
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [content, setContent] = useState(existingBlog?.content || "");
  const [category, setCategory] = useState(existingBlog?.category || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(
        updateBlog({
          id,
          title,
          content,
          category,
          liked: existingBlog.liked,
        }),
      );
    } else {
      dispatch(
        addBlog({
          id: Date.now().toString(),
          title,
          content,
          category,
          liked: false,
        }),
      );
    }
    navigate("/");
  };

  return (
    <form
      className="max-w-3xl h-[100%] mx-auto p-6 space-y-4  "
      onSubmit={submitHandler}
    >
      <input
        className="w-full border p-2 text-yellow-700 border-2 "
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <select
        className="w-full border p-2 text-yellow-700 border-2 "
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>
          Select Category
        </option>
        <option value="General">General</option>
        <option value="Technology">Technology</option>
        <option value="Education">Education</option>
        <option value="Science">Science</option>
        <option value="Social">Social</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <textarea
        className="w-full border p-2 text-yellow-700 border-2 h-64 resize-vertical"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Save
      </button>
      <Link to="/" className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded">
        Cancel
      </Link>
    </form>
  );
};

export default AddEditBlog;
