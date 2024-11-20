<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
import useStyles from "./styles";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import mem2 from "../../../images/mem2.png";
import { useDispatch } from "react-redux";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
=======

>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, likePost } from "../../../actions/posts.js";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [likes, setLikes] = useState(post?.likes || []);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id || user?.result?.googleId;
  const hasLikedPost = likes.includes(userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));
    if (hasLikedPost) {
      setLikes((prevLikes) => prevLikes.filter((id) => id !== userId));
    } else {
      setLikes((prevLikes) => [...prevLikes, userId]); // Add like
    }
  };
  const history = useHistory();
  const openPost = () => {
    history.push(`/posts/${post._id}`);
  };
  const Likes = () => {
    if (likes.length > 0) {
      return hasLikedPost ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 1
            ? `You & ${likes.length - 1} others liked`
            : `${likes.length} Like`}
=======
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === user?.result?.googleId || user?.result?._id
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;{" "}
          {post.likes.length > 2
            ? `you and ${post.likes.length - 1} others liked`
            : `${post.likes.length} Like${post.likes.length > 1 ? "s" : ""}`}
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
<<<<<<< HEAD
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
=======
          &nbsp; {post.likes.length}{" "}
          {post.likes.length === 1 ? "Like" : "Likes"}
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
<<<<<<< HEAD
        &nbsp;Like
=======
        &nbsp; Like
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
      </>
    );
  };
  return (
    <Card className={classes.card} elevation={6} raised>
      <CardMedia
        className={classes.media}
        image={post.selectedFile || mem2} // Fallback image
        title={post.title}
<<<<<<< HEAD
        onClick={openPost}
      />

=======
      />
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId === post.creator ||
        user?.result?._id === post.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            //  varient="contained"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="medium"> </MoreHorizIcon>
          </Button>
        </div>
      )}
      <div className={`${classes.details} ${classes.hashtag}`}>
        <Typography color="textSecondary" variant="body2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant="h5"
        gutterBottom
        color="primary"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.message}
        </Typography>
      </CardContent>
<<<<<<< HEAD

      <CardActions className={classes.cardActions}>
        <Button
          color="primary"
          onClick={handleLike}
=======
      <CardActions className={classes.cardActions}>
        <Button
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
          disabled={!user?.result}
          size="small"
          className={classes.buttononhoverL}
        >
          <Likes />
        </Button>
<<<<<<< HEAD

=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
        {(user?.result?.googleId === post.creator ||
          user?.result?._id === post.creator) && (
          <Button
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
<<<<<<< HEAD
            color="secondary"
=======
            color="primary"
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
            size="small"
            className={classes.buttononhoverD}
          >
            <DeleteIcon fontSize="small"></DeleteIcon>Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
