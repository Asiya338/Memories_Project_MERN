import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  paper: {
    padding: theme.spacing(2),
    borderRadius: "4px",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    "@media (max-width: 400px)": {
      fontSize: "1rem", // Extra-small screens
      margin: "20px 0px",
    },

    "&:hover": {
      backgroundColor: "#ffff", // Change to a different color on hover
<<<<<<< HEAD
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)", // Adding shadow
=======
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)", // Adding shadow
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "100%",
    margin: "10px 0",
    padding: "2px",
  },
  buttonSubmit: {
    marginBottom: 10,
    margin: 10,
  },
<<<<<<< HEAD

  textField: {
    "& .MuiOutlinedInput-root textarea": {
      // Webkit scrollbars for Chrome, Safari, and Edge
      "&::-webkit-scrollbar": {
        width: "6px", // Set the width of the scrollbar
      },
      "&::-webkit-scrollbar-track": {
        background: "#f7f7f8", // Background color of the track
        borderRadius: "10px", // Rounded corners for the track
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#c1c1c1", // Color of the thumb
        borderRadius: "10px", // Rounded corners for the thumb
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#a8a8a8", // Color of the thumb when hovered
      },
    },
  },
=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
}));
