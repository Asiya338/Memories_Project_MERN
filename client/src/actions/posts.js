import * as api from "../api";
import {
  FETCH_ALL,
  UPDATE,
  DELETE,
  CREATE,
  FETCH_QUERY,
<<<<<<< HEAD
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  COMMENT,
} from "../constants/actionTypes";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    // console.log(data);
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("Error in actions: Fetch", error.message); // Log the error if the API call fails
  }
};
// Action creator using redux-thunk
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
=======
} from "../constants/actionTypes";

// Action creator using redux-thunk
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // Call the API to fetch posts
    dispatch({ type: FETCH_ALL, payload: data }); // Dispatch the fetched data
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
  } catch (error) {
    console.log("Error in actions: Fetch", error.message); // Log the error if the API call fails
  }
};

//search => fetch posts by tags

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
<<<<<<< HEAD
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    //console.log(data);
    dispatch({ type: FETCH_QUERY, payload: data });
    dispatch({ type: END_LOADING });
=======
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: FETCH_QUERY, payload: data });
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
  } catch (error) {
    console.log("Error in actions: getPostsBySearch", error.message);
  }
};

//create post
<<<<<<< HEAD
export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    history.push(`/posts/${data._id}`);
    dispatch({ type: CREATE, payload: data });
=======
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    console.log(post);
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
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
<<<<<<< HEAD

//comment on posts

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);
    console.log(data);
    dispatch({ type: COMMENT, payload: data });
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
