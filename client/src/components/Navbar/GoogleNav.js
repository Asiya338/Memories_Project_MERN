import React, { useState, useEffect } from "react";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import { useHistory, Link, useLocation } from "react-router-dom";
import { Avatar, Button, Toolbar, Typography } from "@material-ui/core";

const GoogleNav = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  //console.log(jwtDecode(user.result));

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setUser(profile);
  }, [location]);

  let data = null;
  if (user && user.result) {
    try {
      data = jwtDecode(user?.result);
    } catch (error) {
      console.error("JWT decode error:", error);
      data = null;
    }
  }
  console.log(data);
  const logout = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm(
      `${data.name}, are you sure you want to logout?`
    );

    // Proceed with logout if user confirms
    if (confirmation) {
      dispatch({ type: "LOGOUT" });
      history.push("/");
      setUser(null);
    }
  };
  return (
    <Toolbar className={classes.toolbar}>
      {user ? (
        <div className={classes.profile}>
          <Avatar
            className={classes.avatar}
            alt={data.name}
            src={data.picture}
          ></Avatar>
          <Typography className={classes.userName} variant="h6">
            {data?.name}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.logout}
            onClick={logout}
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
          style={{ padding: "10px 20px", fontWeight: "bold" }}
        >
          Sign in
        </Button>
      )}
    </Toolbar>
  );
};

export default GoogleNav;
