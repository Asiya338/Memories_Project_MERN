import * as api from "../api";
import {
  FETCH_ALL,
  UPDATE,
  DELETE,
  CREATE,
  FETCH_QUERY,
} from "../constants/actionTypes";

// Action creator using redux-thunk
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // Call the API to fetch posts
    dispatch({ type: FETCH_ALL, payload: data }); // Dispatch the fetched data
  } catch (error) {
    console.log("Error in actions: Fetch", error.message); // Log the error if the API call fails
  }
};

//search => fetch posts by tags

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: FETCH_QUERY, payload: data });
  } catch (error) {
    console.log("Error in actions: getPostsBySearch", error.message);
  }
};

//create post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    console.log(post);
  } catch (error) {
    console.log("Error in actions: create => ", error.message); // Log the error if the API call fails
  }
};

//update post created by creator
export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, postData);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//delete post , created by creator
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

//like post > any post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
