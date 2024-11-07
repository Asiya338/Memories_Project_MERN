import React, { useState, useEffect } from "react";
import memories from "../../images/memories.png";
import useStyles from "./styles.js";
import CustomNav from "./CustomNav.js";
import GoogleNav from "./GoogleNav.js";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";
import { jwt_decode } from "jwt-decode";
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    /*  if (user) {
      const token = user.token;
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
      }
    } else {
      console.log("User not found");
    } */
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
      {!user?.result?.googleId ? <CustomNav /> : <GoogleNav />}
    </AppBar>
  );
};

export default Navbar;
