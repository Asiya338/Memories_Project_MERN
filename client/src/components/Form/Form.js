import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { useHistory } from "react-router-dom";
import { TextField, Button, Paper, Typography } from "@material-ui/core";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); //prevent browser default loading
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };
  if (!user?.result) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign in to create your memories , like other`s memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        className={`${classes.form} ${classes.root}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="Memory"
          fullWidth
          multiline
          rows={6}
          className={classes.textField}
          value={postData.message}
          onChange={(e) => {
            setPostData({
              ...postData,
              message: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value.split(",") });
          }}
        ></TextField>

        <div className={classes.fileInput}>
          &nbsp;{" "}
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          type="submit"
          color="primary"
          size="large"
          variant="contained"
          fullWidth
        >
          <b>{currentId ? "Re-post" : "Post"} </b>
        </Button>
        <Button
          className={classes.buttonSubmit}
          type="submit"
          color="secondary"
          size="large"
          variant="contained"
          onClick={clear}
          fullWidth
        >
          <b>Clear</b>
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
