import React from "react";
import EditorPick from "./EditorPick";

const EditorBlog = () => {
  return (
    <div className="px-10 py-20">
      <h2 className="text-2xl font-bold text-gray-800">Editor's Pick</h2>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6 place-items-center pt-[3rem]">
        <EditorPick />
      </div>
    </div>
  );
};

export default EditorBlog;
