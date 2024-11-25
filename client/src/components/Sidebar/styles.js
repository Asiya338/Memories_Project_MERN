import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperStyles: {
    position: "fixed",
    top: -40,
    left: 0,
    width: "80%",
    height: "140px",
    bottom: 0,
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",
    padding: "20px",
    zIndex: 2000,
    overflow: "hidden",
    display: "flex",

    alignItems: "center", // Align items in the center vertically
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "200px",
      top: -40,
      left: 0,
      flexDirection: "column",
    },
  },
  userName: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      fontSize: "13px",
    },
  },
  buttonStyles: {
    margin: "10px 0",
    border: "none",
    cursor: "pointer",
    alignSelf: "flex-end",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0",
      fontSize: "10px",
    },
  },
  settings: {
    fontSize: "3rem",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  iconStyles: {
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      width: theme.spacing(3),
      height: theme.spacing(3),
      fontSize: "10px",
    },
  },

  theme: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      gap: theme.spacing(0),
      flexDirection: "row",
    },
  },
}));

export default useStyles;
