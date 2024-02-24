import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { Blog } from "./models/blogModel.js";
import { fileURLToPath } from "url";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file
const app = express();
const port = 3000;

// Creating Node.js globals for filename and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connecting to Database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, "uploads");
fs.existsSync(uploadsDir) || fs.mkdirSync(uploadsDir, { recursive: true });

// Multer Middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Initialize Multer
const upload = multer({ storage: storage });

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/blogs/:category", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const skip = (page - 1) * limit;

  try {
    let filter = {};
    if (req.params.category !== "All") {
      filter.category = req.params.category;
    }

    const blogs = await Blog.find(filter).skip(skip).limit(limit);
    const total = await Blog.countDocuments(filter); // Count documents based on the same filter

    res.status(200).json({ blogs, total });
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/top-blogs", async (req, res) => {
  try {
    const blogIds = [
      "65d78bb80f2d117d85e25e11",
      "65d7af7753a614c2cc1cf477",
      "65d7b08253a614c2cc1cf47d",
      "65d7b36b53a614c2cc1cf491",
    ];
    const blogs = await Blog.find({
      _id: blogIds,
    });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    // Extract the filename from the uploaded file
    const filename = req.file.filename;
    const imagePath = `/uploads/${filename}`;
    const newBlog = await Blog.create({
      ...req.body,
      imagePath,
    });

    res.status(201).json({
      Status: "Success",
      Blog: newBlog,
    });
  } catch (error) {
    res.status(500).json({
      Status: "Fail",
      Message: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
