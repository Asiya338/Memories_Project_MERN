import {
  FETCH_ALL,
  DELETE,
  UPDATE,
  CREATE,
  FETCH_QUERY,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  COMMENT,
} from "../constants/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    case FETCH_QUERY:
      return {
        ...state,
        posts: action.payload,
      }; // Return the payload for search posts
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    //comment on post
    case COMMENT:
      return {
        ...state,
        posts: {
          ...state.posts.map((post) => {
            if (post._id === action.payload._id) {
              return action.payload;
            }
            return post;
          }),
        },
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    // dlete post to the state
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
