import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "500px",
    background: "#f7f7f8",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "20px",
    width: "35%",

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "95%",
    },
  },
  recommendedPosts: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  recommendedPostItem: {
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "48%",
    },
    marginBottom: "20px",
    cursor: "pointer",
  },
  imgRecc: {
    borderRadius: "15px",
    width: "350px",
    height: "350px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "10px",
      width: "240px",
      height: "200px",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "20px",
    borderRadius: "15px",
    height: "59vh",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  commentsInnerContainer: {
    height: "300px",
    overflowY: "auto",
    marginRight: "30px",
    width: "50%",

    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
      width: "100%",
    },
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
  avatar: {
    width: "30px",
    height: "30px",
    backgroundColor: "purple",
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    },
  },
  commentsStyle: {
    backgroundColor: " #f7f7f8",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "0.875rem",
    color: "#333",
  },
  writeComment: {
    width: "45%",

    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
      width: "100%",
      marginTop: "10px",
    },
  },
  textField: {
    backgroundColor: " #FFFF",

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
  iconStyle: {
    fontSize: "30px",
    padding: "20px",
  },
}));
