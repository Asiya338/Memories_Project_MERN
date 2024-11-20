import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,

  tags: [String],
  selectedFile: String,

  likes: {
    type: [String], // Array of user ids who liked this post.

    default: [],
  },
<<<<<<< HEAD
  comments: {
    type: [String],
    default: [],
  },
=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
