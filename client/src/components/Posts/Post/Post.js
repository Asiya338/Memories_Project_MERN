import React from "react";
import useStyles from "./styles";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, likePost } from "../../../actions/posts.js";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile} // Fallback image
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

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
      <CardActions className={classes.cardActions}>
        <Button
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
          size="small"
          className={classes.buttononhoverL}
        >
          <ThumbUpAltIcon fontSize="small"></ThumbUpAltIcon> &nbsp; Like (
          {post.likeCount})
        </Button>
        <Button
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
          color="primary"
          size="small"
          className={classes.buttononhoverD}
        >
          <DeleteIcon fontSize="small"></DeleteIcon>Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
