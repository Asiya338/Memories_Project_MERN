import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paperStyles: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "300px",
    height: "100vh",
    background: "#F7F7F8",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",
    padding: "20px",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
  },
  buttonStyles: {
    margin: "10px 0",
    border: "none",
    cursor: "pointer",
    alignSelf: "flex-end",
  },
  iconStyles: {
    fontSize: "40px",
  },
  avatar: {
    backgroundColor: "purple",
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow only at the bottom
    },
  },
}));

export default useStyles;
