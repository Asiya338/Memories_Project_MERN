import { FETCH_ALL, DELETE, UPDATE, CREATE } from "../constants/actionTypes";
export default (posts = [], action) => {
  switch (action.type) {
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    // dlete post to the state
    case DELETE:
      return posts.filter((post) => post._id !== action.payload.id);
    case FETCH_ALL:
      return action.payload; // Return the payload for all posts

    case CREATE:
      return [...posts, action.payload];
    default:
      return posts; // Return the current state if no matching action type
  }
};
