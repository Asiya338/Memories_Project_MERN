import React, { useState, useEffect } from "react";
import memories from "../../images/memories.png";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Sidebar from "../Sidebar/Sidebar.js";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import jwtDecode from "jwt-decode";

const Navbar = () => {
  let data = null;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isDarkMode, setIsDarkMode] = useState(false);

  // handle sidebar toggle
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // to toggle between light and dark themes
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  if (!user?.result?._id) {
    try {
      data = jwtDecode(user?.result); // Assuming "result" contains the user profile
    } catch (error) {
      console.error("Error decoding user data:", error);
      data = user?.result;
    }
  }

  // to logout user
  const logout = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm(`Are you sure you want to logout?`);
    if (confirmation) {
      dispatch({ type: "LOGOUT" });
      history.push("/");
      setUser(null);
    }
  };

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile?.token) {
      try {
        const token = profile.token;

        // Decode the token only if it's valid
        const decodedToken = jwtDecode(token);

        // Check if token is expired
        if (decodedToken.exp * 1000 < Date.now()) {
          logout();
        } else {
          setUser(profile);
        }
      } catch (error) {
        console.error("Error decoding token in Navbar :", error.message);
        logout(); // Logout user if the token is invalid
      }
    } else {
      console.log("No token found in localStorage.");
    }
  }, [location]);

  //to set theme
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
    },
  });

  // to store in localstorage

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <img src={memories} alt="memories img" className={classes.image} />
        </div>

        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.avatar}
                alt={data?.given_name}
                src={data?.picture}
              >
                {user?.result?._id && user?.result?.name?.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result?._id ? user?.result?.name : data?.given_name}
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
              {isSidebarOpen && (
                <Sidebar
                  onClose={handleSidebar}
                  toggleTheme={toggleTheme}
                  isDarkMode={isDarkMode}
                />
              )}

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
              className={classes.logout}
            >
              Sign in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
