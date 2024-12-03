import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles.js";
import { getPosts } from "../actions/posts.js";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const Paginate = ({ page, sortBy }) => {
  const classes = useStyles();
  const history = useHistory();
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId =
    sortBy === "liked" || sortBy === "my-posts"
      ? user?.result?._id || user?.result?.googleId
      : null;

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page, sortBy, userId));
      history.push(
        `/posts?page=${page}&sortBy=${sortBy}${
          userId ? `&userId=${userId}` : ""
        }`
      );
    }
  }, [page, sortBy, userId, dispatch, history]);

  if (sortBy === "liked" && !userId) {
    return (
      <Typography variant="h6" align="center">
        You need to be logged in to get posts that liked by you.
      </Typography>
    );
  }

  if (sortBy === "my-posts" && !userId) {
    return (
      <Typography variant="h6" align="center">
        You need to be logged and create a post to get posts that posted by you.
      </Typography>
    );
  }
  return (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="secondary"
      classes={{ ul: classes.ul }}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
