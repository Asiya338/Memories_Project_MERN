import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Grow,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import Posts from "../Posts/Posts.js";
import Form from "../Form/Form.js";
import useStyles from "./styles.js";
import { useHistory, useLocation } from "react-router-dom";
import { getPosts } from "../../actions/posts.js";
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
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleSearch = () => {
    if (search.trim()) {
      //dispatch to fetch based on tags
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
            <Paper elevation={6} className={classes.pagination}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
