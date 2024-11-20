<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
import {
  Container,
  Grid,
  Grow,
  Paper,
  AppBar,
  TextField,
  Button,
<<<<<<< HEAD
  Typography,
} from "@material-ui/core";
import Slider from "./Slider.js";
=======
} from "@material-ui/core";
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785

import Posts from "../Posts/Posts.js";
import Form from "../Form/Form.js";
import useStyles from "./styles.js";
import { useHistory, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { getPostsBySearch } from "../../actions/posts.js";
=======
import { getPosts, getPostsBySearch } from "../../actions/posts.js";
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
import { useDispatch } from "react-redux";
import Pagination from "../Pagination.jsx";
import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const history = useHistory(); //to handle navigation
  const location = useLocation();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const [currentId, setCurrentId] = useState(null); //to maintain id of post for editing
  const dispatch = useDispatch(); //to dispatch action : react-redux =: hook
<<<<<<< HEAD
=======
  /* useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]); */
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleSearch = () => {
    if (search.trim() || tags) {
      //dispatch to fetch based on tags and search
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchquery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      //enter key
      handleSearch();
    }
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="stretch"
          justifyContent="space-between"
          spacing={4}
          className={`${classes.dir} ${classes.gridContainer}`}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                fullWidth
                name="search"
                label="Search Memories .... "
                variant="outlined"
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
              ></TextField>
              <ChipInput
                style={{ margin: "10px 0px" }}
                value={tags}
                label="Search tags"
                onAdd={handleAdd}
                onDelete={handleDelete}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSearch}
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
<<<<<<< HEAD
            {!searchQuery && !tags.length && (
              <Paper elevation={6} className={classes.pagination}>
                <Pagination page={page} />
              </Paper>
            )}

            <Paper elevation={6} className={classes.textCont}>
              <Typography className={classes.textOnMem}>
                <strong>
                  <q>
                    &nbsp; "Memories are treasures that remind us who we are and
                    shape our journey.", &nbsp;
                  </q>
                </strong>
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/******* slider */}

        <Slider />
=======
            <Paper elevation={6} className={classes.pagination}>
              <Pagination page={page} />
            </Paper>
          </Grid>
        </Grid>
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
      </Container>
    </Grow>
  );
};

export default Home;
