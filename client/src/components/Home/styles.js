import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    "&:hover": {
      padding: "16.5px",
      backgroundColor: "#ffff", // Change to a different color on hover
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)", // Adding shadow
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  [theme.breakpoints.down("sm")]: {
    dir: {
      flexDirection: "column-reverse",
    },
  },
}));
