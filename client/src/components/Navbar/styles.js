import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    background: "#ffffff",
    padding: "8px  30px",
    "&:hover": {
      backgroundColor: "#ffff",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Adding shadow
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0",
      borderRadius: 6,
      flexDirection: "column",
      padding: "0px  0px",
    },
  },

  heading: {
    fontFamily: "Garamond, serif",
    fontWeight: "bold",
    fontSize: "4rem",
    background: "linear-gradient(270deg, #EE00FF, #970000, #d900F9 , #991090)",
    backgroundSize: "200% 100%", // Make the gradient larger than the text
    backgroundPosition: "left center", // Start position for the animation
    color: "transparent", // Make the text transparent
    WebkitBackgroundClip: "text", // Clip the background to the text
    animation: "$colorChange 4s linear infinite", // Animation applied here

    "@media (max-width: 1200px)": {
      fontSize: "3.5rem", // Large screens
    },
    "@media (max-width: 900px)": {
      fontSize: "3rem", // Medium screens
    },
    "@media (max-width: 600px)": {
      fontSize: "2.5rem", // Small screens
    },
    "@media (max-width: 400px)": {
      fontSize: "2rem", // Extra-small screens
    },
  },

  "@keyframes colorChange": {
    "0%": { backgroundPosition: "0% center" }, // Start from the left
    "50%": { backgroundPosition: "50% center" },
    "100%": { backgroundPosition: "100% center" }, // Move to the right
  },

  image: {
    marginLeft: "15px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
    width: "400px",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
      width: "300px",
      padding: "0px  0px",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    color: theme.palette.type === "dark" ? "#fff" : "#000",
  },
  avatar: {
    color: "white",
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
  },
  purple: {
    backgroundColor: theme.palette.secondary.main,
  },
  logout: {
    padding: "10px 20px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      padding: "6px  10px",
    },
  },
}));

export default useStyles;
