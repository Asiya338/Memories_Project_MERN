import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

//to fetch posts
export const getPosts = async (req, res) => {
<<<<<<< HEAD
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await PostMessage.countDocuments({});
    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);
    console.log(posts.length);
    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
=======
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
<<<<<<< HEAD

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostMessage.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
// to fetch by query

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;
  try {
    const title = new RegExp(searchQuery, "i"); //to ignore lower-upper case
    const posts = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });
    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: `failed to search : ${error}` });
  }
};

//to create a new post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  console.log("Post Data:", newPost);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log("error see.");
  }
};

//to update a post existing

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that ID");
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

//to delete a post

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that ID");
  }

  await PostMessage.findByIdAndDelete(id);
  res.json({ message: "Post deleted successfully." });
};

//like - unlike post

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!req.userId) {
<<<<<<< HEAD
    return res.status(404).json({ message: "unauthenticated can`t like post" });
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
=======
    res.status(404).json({ message: "unauthenticated can`t like post" });
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
      .status(404)
      .json({ message: "No post with that ID : in likepost backend" });
  }
  const post = await PostMessage.findById(id);
  const index = await post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    post.likes.push(String(req.userId));
  } else {
    post.likes = post.likes.filter((id) => {
      id !== String(req.userId);
    });
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.send(updatedPost);
};
<<<<<<< HEAD

export const commentPost = async (req, res) => {
  const { value } = req.body;
  const { id } = req.params;
  const post = await PostMessage.findById(id);
  post.comments.push(value);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};
=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
