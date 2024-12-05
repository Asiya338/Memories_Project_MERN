import * as api from "../api/index";
import {
  AUTH,
  REQ_RESET_PASSWORD,
  RESET_PASSWORD,
} from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const resetPasswordRequest = (email) => async (dispatch) => {
  try {
    const { data } = await api.reqResetPass(email);
    dispatch({ type: REQ_RESET_PASSWORD, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = (password, token) => async (dispatch) => {
  try {
    const { data } = await api.resetPass(password, token);
    dispatch({ type: RESET_PASSWORD, payload: data });
  } catch (error) {
    console.log(error);
  }
};
