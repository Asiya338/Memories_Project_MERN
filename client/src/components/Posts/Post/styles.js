import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "darken",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    backgroundColor: "#ffffff",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "500px",
    position: "relative",
    "&:hover": {
      background: "#ffffffff",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
    },
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
    fontFamily: " Georgia, serif",
  },
  cardActions: {
    padding: "0 8px 8px 8px",
    display: "flex",
    justifyContent: "space-between",
  },
  buttononhoverD: {
    "&:hover": {
      color: "#B22222",
    },
  },
  buttononhoverL: {
    "&:hover": {
      color: "#2E8B57",
    },
  },
  hashtag: {
    color: "#1DA1F2" /* Twitter Blue */,
    cursor: "pointer",
  },
}));

export default useStyles;
