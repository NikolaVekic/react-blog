import React, { useState } from "react";
import BlogPreview from "./BlogPreview";

const BlogShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(undefined);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  return (
    <div className="py-20 px-10 ">
      <div className="text-gray-800 flex flex-col gap-4 justify-center lg:items-start">
        <h2 className="text-2xl font-bold lg:text-4xl md:text-4xl">
          Popular topics
        </h2>
        <div className="text-sm lg:text-xl md:text-md flex gap-6">
          <p
            onClick={() => handleCategoryClick("All")}
            className=" border-b-2 border-transparent hover:border-amber-400 cursor-pointer"
          >
            All
          </p>
          <p
            onClick={() => handleCategoryClick("Camping")}
            className=" border-b-2 border-transparent hover:border-amber-400 cursor-pointer"
          >
            Camping
          </p>
          <p
            onClick={() => handleCategoryClick("Hunting")}
            className=" border-b-2 border-transparent hover:border-amber-400 cursor-pointer"
          >
            Hunting
          </p>
          <p
            onClick={() => handleCategoryClick("Adventure")}
            className=" border-b-2 border-transparent hover:border-amber-400 cursor-pointer"
          >
            Adventure
          </p>
          <p
            onClick={() => handleCategoryClick("Survival")}
            className=" border-b-2 border-transparent hover:border-amber-400 cursor-pointer"
          >
            Survival
          </p>
        </div>
      </div>

      <BlogPreview category={selectedCategory} />
    </div>
  );
};

export default BlogShowcase;
