import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  Container,
  Paper,
  Typography,
  Button,
  Divider,
  Avatar,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import EmailIcon from "@material-ui/icons/Email";

const Sidebar = ({ onClose, toggleTheme, isDarkMode }) => {
  const classes = useStyles();
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

      <Typography variant="h6" className={classes.userName}>
        Hi , {user?.result?.name}
        <br />
        Welcome to Memories World
      </Typography>

      <Divider style={{ margin: "20px 0" }} />
      <div className={classes.theme}>
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
      </div>
      <div className={classes.theme}>
        <EmailIcon className={classes.settings} />
        <Typography className={classes.userName} variant="h6">
          {user?.result?.email}
        </Typography>
      </div>
      <Divider style={{ margin: "20px 0" }} />
      <div className={classes.theme}>
        <SettingsIcon className={classes.settings} />
        <Typography className={classes.userName} variant="h6">
          Theme Settings
        </Typography>
      </div>
      <Divider style={{ margin: "20px 0" }} />
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleTheme}
        startIcon={isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
      >
        {isDarkMode ? "light-mode" : "dark-mode"}
      </Button>
    </Paper>
  );
};

export default Sidebar;
