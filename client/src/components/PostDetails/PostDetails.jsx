import Comments from "./Comments.jsx";
import mem2 from "../../images/mem2.png";
import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getPostsBySearch } from "../../actions/posts.js";
import { useHistory, useParams } from "react-router-dom";
import useStyles from "./styles.js";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import moment from "moment";

const PostDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { post, posts, isLoading } = useSelector((state) => state.posts);

  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post?.tags, dispatch]);

  const onCommentAdded = () => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  };

  if (!post) {
    return null;
  }

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const openPost = (_id) => {
    history.push(`/posts/${_id}`);
  };

  const recommendedPosts = Array.isArray(posts)
    ? posts.filter(({ _id }) => post._id !== _id)
    : [];

  return (
    <Paper elevation={6} style={{ padding: "20px", borderRadius: "15px" }}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h3">
            {post.title}
          </Typography>
          <Typography gutterBottom variant="h6" color="primary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom component="h5">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0", color: "#f7f7f8" }} />

          <Comments post={post} onCommentAdded={onCommentAdded} />

          <Divider style={{ margin: "20px 0", color: "#f7f7f8" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={post.selectedFile || mem2}
            alt={post.title}
          />
        </div>
      </div>

      {recommendedPosts.length > 0 && (
        <div className={classes.section}>
          <Typography variant="h5" gutterBottom>
            You might also like:{" "}
          </Typography>
          <Divider style={{ margin: "20px 0", color: "#f7f7f8" }} />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, message, selectedFile, name, likes, _id }) => (
                <div
                  onClick={() => openPost(_id)}
                  key={_id}
                  className={classes.recommendedPostItem}
                >
                  <Typography variant="h6" gutterBottom color="secondary">
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Created By: {name}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {message}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Likes: {likes.length}
                  </Typography>
                  <img
                    className={classes.imgRecc}
                    src={selectedFile || mem2}
                    alt="Post"
                    width="300px"
                    height="250px"
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
