import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import { resetPassword } from "../../actions/auth";
import { useParams, useHistory } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams(); // Retrieve token from the URL
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ password, token }))
      .then(() => {
        setMessage("Password reset is successful!");
        history.push("/auth");
      })
      .catch(() => setMessage("Error resetting password. Please try again."));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper style={{ padding: "20px" }}>
        <Typography variant="h5">Set New Password</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Reset Password
          </Button>
        </form>
        {message && (
          <Typography style={{ marginTop: "20px" }}>{message}</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ResetPassword;
