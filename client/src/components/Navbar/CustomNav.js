import React, { useState, useEffect } from "react";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { useHistory, Link, useLocation } from "react-router-dom";
import { Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Sidebar from "../Sidebar/Sidebar.js";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const CustomNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  let data = null;

  if (user) {
    try {
      data = user?.result; // Assuming "result" contains the user profile
    } catch (error) {
      console.error("Error decoding user data:", error);
      data = null;
    }
  }

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setUser(profile);
  }, [location]);

  const logout = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm(
      `${user?.result?.name}, are you sure you want to logout?`
    );
    if (confirmation) {
      dispatch({ type: "LOGOUT" });
      history.push("/");
      setUser(null);
    }
  };

  return (
    <Toolbar className={classes.toolbar}>
      {user !== null ? (
        <div className={classes.profile}>
          <Avatar
            className={classes.avatar}
            alt={data?.name}
            src={data?.picture}
          >
            {user?.result?.name?.charAt(0)}
          </Avatar>
          <Typography className={classes.userName} variant="h6">
            {user?.result?.name}
          </Typography>

          <button
            onClick={handleSidebar}
            style={{
              border: "none",
              background: "transparent",

              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontSize: "1.2rem",
            }}
          >
            {isSidebarOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </button>

          {/* Sidebar Component */}
          {isSidebarOpen && <Sidebar onClose={handleSidebar} />}

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

export default CustomNav;
