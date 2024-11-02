import React from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const Input = ({
  name,
  half,
  handleChange,
  label,
  type,
  autoFocus,
  handleShowPassword,
}) => {
  return (
    <Grid xs={12} item sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange()}
        variant="outlined"
        required
        fullWidth
        label={label}
        type={type}
        autoFocus={autoFocus}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
