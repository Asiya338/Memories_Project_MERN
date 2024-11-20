import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { useStyles } from "./styles.js";

const Footer = () => {
  const classes = useStyles();

  return (
    <Paper elevation={6} className={classes.paper}>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        className={classes.typography}
      >
        Copyright © Memories 2024
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.typography}
      >
        All rights reserved.
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.typography}
      >
        Terms of Service & Privacy Policy
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.typography}
      >
        Made with ❤️ by Asiya
      </Typography>
    </Paper>
  );
};

export default Footer;
