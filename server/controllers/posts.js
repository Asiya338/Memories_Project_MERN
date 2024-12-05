import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// To fetch posts
export const getPosts = async (req, res) => {
  const { page, sortBy, userId } = req.query;
  try {
    const LIMIT = 8;
    let sortOption = {};
    let total;
    let posts;
    if (sortBy === "id-asc") {
      sortOption = { _id: 1 };
    } else if (sortBy === "alphabetical") {
      sortOption = { title: 1 };
    } else if (sortBy === "alpha-reverse") {
      sortOption = { title: -1 };
    } else {
      sortOption = { _id: -1 };
    }
    const startIndex = (Number(page) - 1) * LIMIT;
    total = await PostMessage.countDocuments({});
    posts = await PostMessage.find({})
      .sort(sortOption)
      .limit(LIMIT)
      .skip(startIndex);

    if (sortBy === "liked" && userId) {
      total = await PostMessage.countDocuments({ likes: { $in: [userId] } });
      posts = await PostMessage.find({ likes: { $in: [userId] } })
        .sort(sortOption)
        .limit(LIMIT)
        .skip(startIndex);
    }

    if (sortBy === "my-posts" && userId) {
      total = await PostMessage.countDocuments({ creator: [userId] });
      posts = await PostMessage.find({ creator: [userId] })
        .sort(sortOption)
        .limit(LIMIT)
        .skip(startIndex);
    }
    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// To fetch a single post
export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostMessage.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// To fetch posts by search query
export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    // Create a case-insensitive regex for the title : ignore
    const title = new RegExp(searchQuery, "i");

    const posts = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags ? tags.split(",") : [] } }],
    });
    if (posts.length === 0) {
      return res
        .status(404)
        .json({ message: "No posts found matching your search criteria." });
    }
    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: `Failed to search: ${error}` });
  }
};

// To create a new post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// To update an existing post
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

// To delete a post
export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that ID");
  }

  await PostMessage.findByIdAndDelete(id);
  res.json({ message: "Post deleted successfully." });
};

// Like - Unlike post
export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!req.userId) {
    return res
      .status(404)
      .json({ message: "Unauthenticated - can't like post" });
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid post ID" });
  }

  const post = await PostMessage.findById(id);
  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(String(req.userId)); // Like the post
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId)); // Unlike the post
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.send(updatedPost);
};

// Comment on a post
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
