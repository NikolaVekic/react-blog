import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const BlogPreview = ({ category }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const limit = 8; // Number of posts per page

  useEffect(() => {
    const fetchBlogs = async () => {
      const endpoint = `${
        category
          ? `http://localhost:3000/api/blogs/${encodeURIComponent(category)}`
          : "http://localhost:3000/api/blogs/All"
      }?page=${currentPage}&limit=${limit}`;

      const response = await fetch(endpoint);
      const { blogs, total } = await response.json();
      setBlogs(blogs);
      setTotalPosts(total);
    };
    fetchBlogs();
  }, [category, currentPage]); // Include category in the dependency array

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const handleNext = () => {
    if (currentPage < numOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const numOfPages = Math.ceil(totalPosts / limit);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6 place-items-center pt-[3rem]">
        {blogs.map((blog) => (
          <div
            className=" text-gray-600 flex flex-col gap-2 blog-image-responsive h-[34rem] "
            key={blog._id}
          >
            <div className="image-container rounded-md cursor-pointer">
              <img
                src={`http://localhost:3000${blog.imagePath}`}
                alt={blog.title}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <div className="flex justify-between items-center">
                <small>{blog.date}</small>
                <small className="border border-gray-400 px-2 py-1 rounded-lg hover:border-amber-400 hover:text-amber-400 cursor-pointer">
                  {blog.category}
                </small>
              </div>

              <h2 className="text-lg font-bold border-transparent cursor-pointer">
                {blog.title}
              </h2>
              <p className="text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex gap-3">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          <ArrowLeft />
        </button>

        {Array.from({ length: numOfPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md cursor-pointer ${
              currentPage === i + 1 ? "text-amber-400" : "border-transparent"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === numOfPages}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogPreview;
