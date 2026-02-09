import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs.list);

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <h1 className="text-2xl font-bold mb-6 text-center">Blogs</h1>

      {blogs.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No blogs yet</div>
      )}

      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="block bg-white border-[2px] border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 p-5"
          >
            <h2 className="font-extrabold text-2xl text-gray-900 mb-2">
              {blog.title}
            </h2>
            <div className="flex items-center mb-2">
              {blog.category && (
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mr-2">
                  {blog.category}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BlogList;
