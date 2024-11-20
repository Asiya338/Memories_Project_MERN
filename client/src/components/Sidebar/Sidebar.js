import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import {
  Container,
  Paper,
  Typography,
  Button,
  Divider,
  Avatar,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const Sidebar = ({ onClose }) => {
  const classes = useStyles();
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  console.log("post", post);
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!user) {
    return null;
  }
  return (
    <Paper className={classes.paperStyles} elevation={6}>
      <Button
        onClick={onClose}
        color="secondary"
        className={classes.buttonStyles}
      >
        <CloseIcon className={classes.iconStyles} />
      </Button>

      <Typography variant="h6">
        Hi , {user?.result?.name}
        <br />
        Welcome to Memories World !!!
      </Typography>

      <Avatar
        className={classes.avatar}
        alt={user?.result?.name}
        src={user?.result?.picture}
      >
        {user?.result?.name?.charAt(0)}
      </Avatar>
      <Typography className={classes.userName} variant="h6">
        {user?.result?.name}
      </Typography>
      <Typography className={classes.userName} variant="h6">
        {user?.result?.email}
      </Typography>
    </Paper>
  );
};

export default Sidebar;
