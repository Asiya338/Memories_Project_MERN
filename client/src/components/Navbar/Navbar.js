import React, { useState, useEffect } from "react";
import memories from "../../images/memories.png";
import useStyles from "./styles.js";

import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
const Navbar = () => {
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // console.log(user.result.email);
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setUser(profile);
  }, []);
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          variant="h2"
          className={classes.heading}
          component={Link}
          to="/"
        >
          MEMORIES
        </Typography>
        <img
          src={memories}
          alt="memories img"
          height="60"
          className={classes.image}
        />
      </div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.avatar}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {/*  {user.result.given_name.chartAt(0)} */}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.give_name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.logout}
              onClick={() => {}}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="secondary"
            onClick={() => {}}
            style={{ padding: "10px 20px", fontWeight: "bold" }}
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
