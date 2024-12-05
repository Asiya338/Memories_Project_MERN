import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import { resetPasswordRequest } from "../../actions/auth.js";
import useStyles from "./styles.js";

const ForgotPassword = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordRequest(email))
      .then(() => setMessage("Check your email for the reset link."))
      .catch(() => setMessage("Error sending reset link. Please try again."));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper style={{ padding: "20px" }} className={classes.padd}>
        <Typography variant="h5">Reset Password</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            style={{ marginTop: "20px" }}
          >
            Send Reset Link
          </Button>
        </form>
        {message && (
          <Typography style={{ marginTop: "20px" }}>{message}</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
