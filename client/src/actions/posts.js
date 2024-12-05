import * as api from "../api";
import {
  FETCH_ALL,
  UPDATE,
  DELETE,
  CREATE,
  FETCH_QUERY,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  COMMENT,
} from "../constants/actionTypes";

// Action creator using redux-thunk
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("Error in actions: getPost", error);
  }
};

export const getPosts = (page, sortBy, userId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page, sortBy, userId);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("Error in actions: getPosts", error);
  }
};

//search => fetch posts by tags
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_QUERY, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("Error in actions: getPostsBySearch", error);
  }
};

//create post
export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    history.push(`/posts/${data._id}`);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("Error in actions: createPost ", error);
  }
};

//update post created by creator
export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, postData);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("Error in actions : updatePost", error);
  }
};

//delete post , created by creator
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("Error in actions : deletePost", error);
  }
};

//like post > any post but only one time
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("Error in actions : likePost", error);
  }
};

//comment on posts

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);
    dispatch({ type: COMMENT, payload: data });
    return data.comments;
  } catch (error) {
    console.log("Error in actions : commentPost", error);
  }
};
