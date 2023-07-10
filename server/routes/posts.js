import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getOnePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getOnePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
