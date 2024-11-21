import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    borderRadius: "15px",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    padding: "8px  30px",
    "&:hover": {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)", // Adding shadow
    },
  },
  typography: {
    color: "black",
  },
}));
