import React, { useState } from "react";
import {
  Button,
  Typography,
  Container,
  Grid,
  Avatar,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles.js";
import Input from "./Input.js";
import { signin, signup } from "../../actions/auth.js";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { useDispatch } from "react-redux";
const Auth = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const googleSuccess = async (res) => {
    const result = res?.credential;
    const token = res?.clientId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
      alert("Login successful");
    } catch (error) {
      console.error(error);
      alert("Google login failed. Please try again.");
    }
  };

  const googleFailure = () => {
    console.error("Google login failed");
    alert("Login failed");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Grid item xs={12} sm={6}>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <Input
                name="email"
                label="Email Address"
                type="email"
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                handleChange={handleChange}
                handleShowPassword={handleShowPassword}
              />
            </Grid>
            {isSignup && (
              <Grid item xs={12}>
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            style={{ padding: "10px 20px", fontWeight: "bold" }}
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin
              onSuccess={googleSuccess}
              onError={googleFailure}
              fullWidth
            />
          </GoogleOAuthProvider>

          <Grid container justifycontent="center">
            <Grid item>
              {isSignup ? (
                <>
                  <Typography variant="body2">
                    Already have an account?
                    <Button onClick={switchMode} color="secondary">
                      Sign In
                    </Button>
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body2">
                    Don't have an account?
                    <Button onClick={switchMode} color="secondary">
                      Sign Up
                    </Button>
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
