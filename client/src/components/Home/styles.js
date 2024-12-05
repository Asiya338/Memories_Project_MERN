import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    background: "#F7F7F8",
    "&:hover": {
      backgroundColor: "#ffff",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  sortStyle: {
    backgroundColor: theme.palette.secondary.main,
    padding: "3px",
    fontSize: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    cursor: "pointer",
    color: "white",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "16px",
    background: "#F7F7F8",
    "&:hover": {
      backgroundColor: "#ffff", // Change to a different color on hover
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)", // Adding shadow
    },
  },
  gridContainer: {
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  textCont: {
    borderRadius: "8px",
    padding: "56px", // Add padding to give space around the content
    marginTop: "10px", // Corrected to have a single top margin
    backgroundImage:
      "url(https://plus.unsplash.com/premium_photo-1698381563570-428ea5c8e011?w=800&h=400&auto=format&fit=clip&q=80)",
    backgroundBlendMode: "darken",
    backgroundColor: "rgba(0, 0, 0, 0.5)",

    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
  },

  textOnMem: {
    textAlign: " center",
  },
  imgStyle: {
    borderRadius: "20px",
    margin: "20px 20px",
    width: "400px",
  },
  boxContainer: {
    background: "#F7F7F8",
  },
}));

export default useStyles;
