import React, { useState, useEffect } from "react";
import { Container, Grid, Grow, AppBar, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import { getPosts } from "./actions/posts.js";
import { useDispatch } from "react-redux";
import useStyles from "./styles.js"; // Ensure the import matches your actual file

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null); //to maintain id of post for editing
  const dispatch = useDispatch(); //to dispatch action : react-redux =: hook
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          MEMORIES
        </Typography>
        <img
          src={memories}
          alt="memories img"
          height="60"
          className={classes.image}
        />
      </AppBar>
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
    </Container>
  );
};

export default App;
