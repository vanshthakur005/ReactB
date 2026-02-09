import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, deleteBlog } from "../features/blogs/blogSlice";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blog = useSelector((state) =>
    state.blogs.list.find((b) => b.id === id),
  );

  if (!blog)
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-gray-500">
        <p className="text-lg">Blog not found</p>
      </div>
    );

  const handleEdit = () => {
    navigate(`/edit/${blog.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-8 border border-yellow-700 ">
      <h1 className="text-3xl font-extrabold  mb-2">{blog.title}</h1>
      <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mb-4">
        {blog.category}
      </span>
      <p
        className="mt-4 text-lg text-gray-500 leading-relaxed"
        style={{ whiteSpace: "pre-line" }}
      >
        {blog.content}
      </p>

      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => dispatch(toggleLike(blog.id))}
          className={`text-3xl transition-transform duration-150 hover:scale-125 ${
            blog.liked ? "text-red-500" : "text-gray-400"
          }`}
          title={blog.liked ? "Unlike" : "Like"}
        >
          {blog.liked ? "❤️" : "🤍"}
        </button>
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
        >
          Delete
        </button>
        <Link
          to="/"
          className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
