/* import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",

    "&:hover": {
      backgroundColor: "#ffff", // Change to a different color on hover
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Adding shadow
    },
  },

  heading: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#3E1F47", // Initial color
    animation: "$colorChange 3s linear infinite", // Apply the animation
  },

  "@keyframes colorChange": {
    "0%": { color: "#3E1623" },
    "50%": { color: "#3E6778" },
    "100%": { color: "#3E16" },
  },

  image: {
    marginLeft: "15px",
  },
}));

export default useStyles;
 */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",

    "&:hover": {
      backgroundColor: "#ffff", // Change to a different color on hover
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)", // Adding shadow
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
  [theme.breakpoints.down("sm")]: {
    dir: {
      flexDirection: "column-reverse",
    },
  },
}));

export default useStyles;
