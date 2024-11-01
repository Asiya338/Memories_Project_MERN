import * as api from "../api";
import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../constants/actionTypes";
// Action creator using redux-thunk
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // Call the API to fetch posts
    dispatch({ type: FETCH_ALL, payload: data }); // Dispatch the fetched data
  } catch (error) {
    console.log("Error in actions: Fetch", error.message); // Log the error if the API call fails
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    console.log(post);
  } catch (error) {
    console.log("Error in actions: create => ", error.message); // Log the error if the API call fails
  }
};

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, postData);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
