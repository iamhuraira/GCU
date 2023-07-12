import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getOnePost,
  departmentBasedPost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:department", departmentBasedPost);
router.get("/singlepost/:id", getOnePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
