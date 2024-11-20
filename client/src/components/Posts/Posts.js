import React from "react";
import Post from "./Post/Post.js";
<<<<<<< HEAD
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
=======
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";
const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts); //re-render when change occur in posts
  console.log(posts);
  return !posts.length ? (
    <div className={classes.backg}>
      <CircularProgress />
    </div>
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
<<<<<<< HEAD
      {postsToDisplay.map((post) => (
=======
      {posts.map((post) => (
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
        <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId}></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
