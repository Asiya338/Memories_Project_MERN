import React from "react";
import useStyles from "./styles";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import EmailIcon from "@material-ui/icons/Email";
import jwtDecode from "jwt-decode";

const Sidebar = ({ onClose, toggleTheme, isDarkMode }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  let data;
  if (!user) {
    return null;
  }

  // Check if user.result is a token or an object
  if (user?.result && typeof user.result === "string") {
    try {
      data = jwtDecode(user?.result);
    } catch (error) {
      console.error("Failed to decode JWT:", error);
      data = null;
    }
  } else {
    data = user?.result; // Assume user.result is already an object
  }

  if (!data) {
    return (
      <Paper elevation={6}>
        <Button
          onClick={onClose}
          color="secondary"
          className={classes.buttonStyles}
        >
          <CloseIcon className={classes.iconStyles} />
        </Button>
        <Typography variant="h6" align="center">
          No user data found. Please log in.
        </Typography>
      </Paper>
    );
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
        Hi, {data?.name || data?.given_name || "User"}
        <br />
        Welcome to Memories World !!!
      </Typography>

      <div className={classes.theme}>
        <Avatar
          className={classes.avatar}
          alt={data?.given_name || data?.name || "User"}
          src={data?.picture}
        >
          {data?.name?.charAt(0) || data?.given_name?.charAt(0) || "U"}
        </Avatar>
        <Typography className={classes.userName} variant="h6">
          {data?.name || data?.given_name || "User"}
        </Typography>

        <EmailIcon className={classes.settings} />
        <Typography className={classes.userName} variant="h6">
          {data?.email || "email@gmail.com"}
        </Typography>
      </div>

      <div className={classes.theme}>
        <SettingsIcon className={classes.settings} />
        <Typography className={classes.userName} variant="h6">
          Theme Settings
        </Typography>

        <Button
          className={classes.buttonStyles}
          variant="contained"
          color="secondary"
          onClick={toggleTheme}
          startIcon={
            isDarkMode ? (
              <Brightness4Icon className={classes.iconStyles} />
            ) : (
              <Brightness7Icon className={classes.iconStyles} />
            )
          }
        >
          {isDarkMode ? "light-mode" : "dark-mode"}
        </Button>
      </div>
    </Paper>
  );
};

export default Sidebar;
