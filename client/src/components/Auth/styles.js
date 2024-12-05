import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#ffff",
    color: "black",
    padding: theme.spacing(2),

    "&:hover": {
      backgroundColor: "#ffff",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
    },
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.

    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  space: {
    margin: "10px",
  },
  padd: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));
