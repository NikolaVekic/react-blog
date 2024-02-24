import React, { useEffect, useState } from "react";

const EditorPick = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchBlogs = await fetch("http://localhost:3000/api/top-blogs");
      const data = await fetchBlogs.json();
      setBlogs(data);
    };

    fetchBlogs();
    console.log(blogs);
  });
  return (
    <>
      {blogs.map((blog) => (
        <div
          className="min-h-[20rem] rounded-md p-4 bg-cover bg-center bg-no-repeat text-white flex flex-col justify-end cursor-pointer"
          style={{
            backgroundImage: `url("http://localhost:3000${blog.imagePath}")`,
          }}
        >
          <div>
            <div className="inline-flex flex-col gap-2">
              <small className="border border-gray-400 px-2 py-1 rounded-lg hover:border-amber-400 hover:text-amber-400 cursor-pointer">
                {blog.category}
              </small>
              <small className="text-xs">{blog.date}</small>
            </div>

            <h1 className="text-md font-bold lg:text-2xl md:text-xl">
              {blog.title}
            </h1>
            <p className="w-2/3 text-sm">{blog.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default EditorPick;
