/* import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("sm")]: {
    dir: {
      flexDirection: "column-reverse",
    },
  },
}));

export default useStyles;
 */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
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
