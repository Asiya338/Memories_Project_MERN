import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
<<<<<<< HEAD
  getPost,
  commentPost,
=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
  getPostsBySearch,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

// Define the routes for the posts API
const router = express.Router();

<<<<<<< HEAD
router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/:id/commentPost", auth, commentPost);
=======
router.get("/", getPosts);
router.get("/search", getPostsBySearch);
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
