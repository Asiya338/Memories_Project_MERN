import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  paper: {
    background: "#F7F7F8",
    padding: theme.spacing(1),
    borderRadius: "4px",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    "@media (max-width: 400px)": {
      fontSize: "1rem", // Extra-small screens
      margin: "20px 0px",
    },
    color: "black",
    "&:hover": {
      backgroundColor: "#ffff", // Change to a different color on hover
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)", // Adding shadow
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "100%",
    margin: "5px  0 ",
  },
  buttonSubmit: {
    marginBottom: 6,
    margin: 6,
  },

  textField: {
    "& .MuiOutlinedInput-root textarea": {
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f7f7f8",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#c1c1c1",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#a8a8a8",
      },
    },
  },
}));
