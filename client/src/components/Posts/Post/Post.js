import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, likePost } from "../../../actions/posts.js";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(post?.likes || []);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id || user?.result?.sub;
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
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };
  return (
    <Card className={classes.card} elevation={6} raised>
      <CardMedia
        className={classes.media}
        image={post.selectedFile || mem2} // Fallback image
        title={post.title}
        onClick={openPost}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.sub === post.creator ||
        user?.result?._id === post.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="large"> </MoreHorizIcon>
          </Button>
        </div>
      )}
      <div className={`${classes.details} ${classes.hashtag}`}>
        <Typography color="primary" variant="body2">
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
        <Typography variant="body2" component="p">
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          color="primary"
          onClick={handleLike}
          disabled={!user?.result}
          size="small"
          className={classes.buttononhoverL}
        >
          <Likes />
        </Button>
        {(user?.result?.sub === post.creator ||
          user?.result?._id === post.creator) && (
          <Button
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
            color="secondary"
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
