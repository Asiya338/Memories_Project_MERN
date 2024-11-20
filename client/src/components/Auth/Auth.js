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
import LockOutLinedIcon from "@material-ui/icons/LockOpenOutlined";
import { useDispatch } from "react-redux";

const Auth = () => {
  const initialState = {
    firstName: " ",
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
      alert("login successful");
      console.log("login successful");
    } catch (error) {
      console.log(error);
      alert("login failed");
    }
  };

  const googleFailure = async (error) => {
    console.log("error to login");
    alert("login failed");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const switchMode = () => {
    setIsSignup(!isSignup);
    handleShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent the default form submission behavior of browser
    console.log(formData);
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
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  half
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              handleChange={handleChange}
              xs={6}
            />
            <Input
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              xs={6}
            />

            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              ></Input>
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
          <Typography align="center">or</Typography>
          <GoogleOAuthProvider clientId="567845225014-tugu984vlhmmbp8ia38h4tr3qcpjqfm6.apps.googleusercontent.com">
            <Button fullWidth color="secondary">
              <GoogleLogin
                onSuccess={(res) => {
                  googleSuccess(res);
                }}
                onError={(error) => googleFailure(error)}
              />
            </Button>
          </GoogleOAuthProvider>

          <Grid container justifyContent="flex-end">
            <Grid item>
              {isSignup ? (
                <>
                  <big>Already have an account ?</big>
                  <Button onClick={switchMode} color="secondary">
                    sign in
                  </Button>
                </>
              ) : (
                <>
                  <big>Don't have an account ?</big>
                  <Button onClick={switchMode} color="secondary">
                    sign up
                  </Button>
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
