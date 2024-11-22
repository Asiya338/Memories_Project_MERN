import React, { useState, useRef } from "react";
import { Typography, TextField, Button, Avatar } from "@material-ui/core";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts.js";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";

const Comments = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const commentsRef = useRef();
  const [comment, setComment] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));
  const handleClick = async () => {
    const finalComment = `${user?.result?.name} : ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment("");
    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleShare = () => {
    const postUrl = `${window.location.origin}/posts/${post._id}`;

    const postMessage = post.message;
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: `${postMessage}\n\nRead more: ${postUrl}`, // Including both message and URL
          url: postUrl,
        })
        .catch((err) => console.error("Error sharing", err));
    } else {
      console.log(`Post URL copied: ${postUrl}`);
      alert("Post URL copied to clipboard!");
    }
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Typography variant="h5" color="textSecondary">
              Comments
            </Typography>
            <CommentIcon
              style={{ color: "gray", fontSize: "28px", marginLeft: "8px" }}
            />
          </div>

          {Array.isArray(comments) && comments.length > 0 ? (
            comments.map((comment, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <Avatar
                  className={classes.avatar}
                  style={{ marginRight: "8px" }}
                ></Avatar>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ display: "inline" }}
                >
                  <strong>{comment.split(":")[0]} :</strong>{" "}
                  <div className={classes.commentsStyle}>
                    {comment.split(":")[1]}
                  </div>
                </Typography>
              </div>
            ))
          ) : (
            <Typography variant="subtitle1" color="textSecondary">
              No comments yet.
            </Typography>
          )}
          <div ref={commentsRef}></div>
        </div>
        {user?.result?.name && (
          <div className={classes.writeComment}>
            <Typography variant="subtitle1" gutterBottom>
              Leave a Comment{" "}
            </Typography>
            <TextField
              fullWidth
              minRows={8}
              maxRows={8}
              variant="outlined"
              label="Comment"
              value={comment}
              multiline
              onChange={(e) => setComment(e.target.value)}
              className={classes.textField}
            />

            <Button
              variant="contained"
              onClick={handleClick}
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              color="primary"
            >
              {" "}
              <strong>Comment</strong>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => handleShare()}
              style={{ marginTop: "10px" }}
            >
              <ShareIcon className={classes.shareIcon} />
              &nbsp; <strong>Share this Post</strong>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
