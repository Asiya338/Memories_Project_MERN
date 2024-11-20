<<<<<<< HEAD
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
=======
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    "&:hover": {
<<<<<<< HEAD
      backgroundColor: "#ffff", // Change to a different color on hover
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)", // Adding shadow
=======
      padding: "16.5px",
      backgroundColor: "#ffff", // Change to a different color on hover
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)", // Adding shadow
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
<<<<<<< HEAD
    "&:hover": {
      backgroundColor: "#ffff", // Change to a different color on hover
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)", // Adding shadow
    },
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  textCont: {
    borderRadius: "8px",
    padding: "68px", // Add padding to give space around the content
    marginTop: "10px", // Corrected to have a single top margin
    backgroundImage:
      "url(https://plus.unsplash.com/premium_photo-1698381563570-428ea5c8e011?w=800&h=400&auto=format&fit=clip&q=80)",
    backgroundBlendMode: "darken",
    backgroundColor: "rgba(0, 0, 0, 0.5)",

    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    backgroundSize: "cover", // Cover the entire container with the background image
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Ensure the image does not repeat
    color: "white", // Optional: Ensure text is visible on the background
  },

  textOnMem: {
    textAlign: " center",
  },
  imgStyle: {
    borderRadius: "20px",
    margin: "20px 20px",
    width: "400px",
  },
}));

export default useStyles;
=======
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
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
