import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../Footer";
import BlogPost from "../components/BlogPost";
import EditorBlog from "../components/EditorBlog";

const Blog = () => {
  const hero = "bg-1";
  const side = "items-center";
  const space = "";
  return (
    <div>
      <Navbar />
      <Hero style={{ hero }} position={{ side }} space={{ space }} />
      <BlogPost />
      <EditorBlog />
      <Footer />
    </div>
  );
};

export default Blog;
