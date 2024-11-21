import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperStyles: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "400px",
    height: "100vh",
    background: theme.palette.type === "dark" ? "#303030" : "#F7F7F8",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",
    padding: "20px",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      width: "350px",
    },
  },
  userName: {
    margin: theme.spacing(1),
  },
  buttonStyles: {
    margin: "10px 0",
    border: "none",
    cursor: "pointer",
    alignSelf: "flex-end",
  },
  settings: {
    fontSize: "3rem",
    color: theme.palette.secondary.main,
  },
  iconStyles: {
    fontSize: "3rem",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow only at the bottom
    },
  },
  theme: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));

export default useStyles;
