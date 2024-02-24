import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  category: {
    type: String,
    required: [true, "Category is required."],
  },
  imagePath: {
    type: String,
    required: [true, "Image is required."],
  },
  date: {
    type: String,
    default: () =>
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
  },
});

export const Blog = mongoose.model("Blog", blogSchema);
