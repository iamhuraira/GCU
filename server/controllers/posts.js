import mongoose from "mongoose";
import PostMessage from "../models/postsMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ meesage: error.meesage });
  }
};

export const getOnePost = async (req, res) => {
  try {
    const postID = req.params.id;
    console.log(postID);
    const postMessages = await PostMessage.findById(postID);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ meesage: error.meesage });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ meesage: error.meesage });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully!" });
};

export const departmentBasedPost = async (req, res) => {
  const { department } = req.params;

  const result = await PostMessage.find({ department: department });

  if (result.length === 0)
    return res.status(404).send("No post with that department");

  res.json(result);
};
