import React, { useState, useEffect } from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import Posts from "../Posts/Posts.js";
import Form from "../Form/Form.js";
import useStyles from "./styles.js";
import { getPosts } from "../../actions/posts.js";
import { useDispatch } from "react-redux";
const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null); //to maintain id of post for editing
  const dispatch = useDispatch(); //to dispatch action : react-redux =: hook
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          alignItems="stretch"
          justifyContent="space-between"
          spacing={3}
          className={classes.dir}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
