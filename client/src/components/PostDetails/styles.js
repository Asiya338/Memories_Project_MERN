import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "500px",
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
    flexWrap: "wrap", // Ensure posts wrap as needed
    justifyContent: "center", // Center posts in the container
    gap: "20px", // Add spacing between items
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row", // Arrange posts in rows for large screens
      justifyContent: "space-between", // Distribute posts evenly
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column", // Stack posts for medium and smaller screens
    },
  },
  recommendedPostItem: {
    width: "100%", // Default to full width for smaller screens
    [theme.breakpoints.up("lg")]: {
      width: "48%", // Set width for 2 posts per row on large screens
    },
    marginBottom: "20px",
    cursor: "pointer",
  },
  imgRecc: {
    borderRadius: "15px",
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
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Shadow only at the bottom
    },
  },
  commentsStyle: {
    backgroundColor: " #F7F7F8",
    borderRadius: "8px",
    padding: "8px 12px", // Add some padding for the bubble effect
    fontSize: "0.875rem", // Slightly smaller text
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
  iconStyle: {
    fontSize: "30px",
    padding: "20px",
  },
}));
