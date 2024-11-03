import React, { useState, useEffect } from "react";
import memories from "../../images/memories.png";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useHistory, Link, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // console.log(jwtDecode(user.result));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };
  let data = null;
  if (user !== null) {
    data = jwtDecode(user.result);
  } else {
    data = user;
  }

  //console.log(data.name);
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setUser(profile);
  }, [location]);

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
        {user !== null ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.avatar}
              alt={data.name}
              src={data.picture}
            >
              {/*   {user.result.given_name.chartAt(0)} */}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {data.name}
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
    </AppBar>
  );
};

export default Navbar;
