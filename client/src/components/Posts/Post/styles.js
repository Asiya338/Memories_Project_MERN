import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
<<<<<<< HEAD
    cursor: "pointer",
=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "500px",
    position: "relative",
    "&:hover": {
      backgroundColor: "#ffff",
<<<<<<< HEAD
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
=======
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
      margin: "0.09rem",
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
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
<<<<<<< HEAD
    padding: "0 8px 8px 8px",
=======
    padding: "0 16px 8px 16px",
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
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
<<<<<<< HEAD
    color: "#1DA1F2",
=======
    color: "#1DA1F2" /* Twitter Blue */,

>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
    cursor: "pointer",
  },
});
