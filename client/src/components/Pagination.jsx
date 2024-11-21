import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles.js";
import { getPosts } from "../actions/posts.js";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
const Paginate = ({ page, sortBy }) => {
  const classes = useStyles();
  const history = useHistory();
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page, sortBy));
      history.push(`/posts?page=${page}&sortBy=${sortBy}`);
    }
  }, [page, sortBy]);
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
