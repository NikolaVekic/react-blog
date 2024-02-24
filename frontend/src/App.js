import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlogShowcase from "./components/BlogShowcase";
import EditorBlog from "./components/EditorBlog";
import Footer from "./Footer";

const app = () => {
  const [hero1, hero2] = ["bg-1", "bg-2"];
  const [side1, side2] = ["items-start", "items-end text-end pr-10"];
  const [space1, space2] = ["pl-10", ""];

  return (
    <div>
      <Navbar />
      <Hero style={hero1} position={side1} space={space1} />
      <BlogShowcase />
      <Hero style={hero2} position={side2} />
      <EditorBlog />
      <Footer />
      {/* <Blog /> */}
    </div>
  );
};

export default app;
