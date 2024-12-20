import axios from "axios";

const API = axios.create({
  baseURL: "https://memories-project-server-byvn.onrender.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  } //bearer token to allow access to get resources simply by presenting it (Bearer <JWT>)
  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);

export const fetchPosts = (page, sortBy, userId) =>
  API.get(
    `/posts?page=${page}&sortBy=${sortBy}${userId ? `&userId=${userId}` : ""}`
  );

export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

export const createPost = (newPost) => API.post("/posts", newPost);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);

export const reqResetPass = (email) =>
  API.post("/user/reset-password-req", { email });

export const resetPass = (password, token) =>
  API.post(`/user/reset-password`, { password, token });
