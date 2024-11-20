import React from "react";
import Post from "./Post/Post.js";
import { Grid, CircularProgress, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => state.posts); //re-render when change occur in posts
  const postsToDisplay = Array.isArray(posts) ? posts : [];
  if (!posts && !isLoading) {
    return "NO Content";
  }
  return isLoading ? (
    <Paper className={classes.backg} elevation={6}>
      <CircularProgress size="5em" />
    </Paper>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {postsToDisplay.map((post) => (
        <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId}></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
