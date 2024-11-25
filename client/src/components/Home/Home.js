import React, { useState } from "react";
import {
  Container,
  Grid,
  Grow,
  Paper,
  AppBar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import Slider from "./Slider.js";

import Posts from "../Posts/Posts.js";
import Form from "../Form/Form.js";
import useStyles from "./styles.js";
import { useHistory, useLocation } from "react-router-dom";
import { getPostsBySearch } from "../../actions/posts.js";
import { useDispatch } from "react-redux";
import Pagination from "../Pagination.jsx";
import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const history = useHistory(); //to handle navigation
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [currentId, setCurrentId] = useState(null); //to maintain id of post for editing
  const dispatch = useDispatch(); //to dispatch action : react-redux =: hook
  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearch = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchquery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/posts");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
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
                color="primary"
                onClick={handleSearch}
                fullWidth
              >
                <b>Search</b>
              </Button>

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                style={{ marginTop: "8px" }}
              >
                <b>Sort By : </b>
                &nbsp;
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className={classes.sortStyle}
                >
                  <option value="latest">Latest(default)</option>
                  <option value="id-asc">Oldest</option>
                  <option value="alphabetical">A-Z</option>
                  <option value="alpha-reverse">Z-A</option>
                  <option value="liked">Liked by Me</option>
                  <option value="my-posts">Posted by Me</option>
                </select>
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />

            {!searchQuery && !tags.length && (
              <Paper elevation={6} className={classes.pagination}>
                <Pagination page={page} sortBy={sortBy} />
              </Paper>
            )}

            <Paper elevation={6} className={classes.textCont}>
              <Typography className={classes.textOnMem}>
                <strong>
                  <q>
                    &nbsp; Memories are treasures that remind us who we are and
                    shape our journey. &nbsp;
                  </q>
                </strong>
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Slider />
      </Container>
    </Grow>
  );
};

export default Home;
