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

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import LockOutLinedIcon from "@material-ui/icons/LockOpenOutlined";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const googleSuccess = async (res) => {
    console.log("success");
  };
  const googleFailure = async (error) => {
    console.log("error");
  };
  const handleChange = () => {};

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const switchMode = () => {
    setIsSignup(!isSignup);
    handleShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent the default form submission behavior of browser
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          {<LockOutLinedIcon></LockOutLinedIcon>}
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              handleChange={handleChange}
              autoFocus
              xs={6}
            />
            <Input
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              autoFocus
              xs={6}
            />

            {isSignup && (
              <Input
                name="confirm password"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              ></Input>
            )}
          </Grid>
          <br></br>
          <GoogleOAuthProvider clientId="567845225014-tugu984vlhmmbp8ia38h4tr3qcpjqfm6.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(res) => {
                googleSuccess(res);
              }}
              onError={(error) => googleFailure(error)}
            />
          </GoogleOAuthProvider>
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
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account ?sign in"
                  : "Don't have an account ? Sign up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
