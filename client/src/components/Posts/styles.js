import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  backg: {
    backgroundColor: "#ffff",
    borderRadius: "10rem",
    padding: "1rem",
    display: "inline-block",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
  },
}));
