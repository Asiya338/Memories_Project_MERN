import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    background: theme.palette.type === "dark" ? "#3030" : "#F7F7F8",
    color: theme.palette.type === "dark" ? "#FFFFFF" : "#30303",
  },
}));

export default useStyles;
