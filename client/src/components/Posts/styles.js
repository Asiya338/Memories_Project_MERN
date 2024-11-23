import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  actionDiv: {
    textAlign: "center",
  },
  backg: {
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    borderRadius: "15px",
  },
}));
