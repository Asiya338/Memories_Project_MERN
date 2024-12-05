import {
  AUTH,
  LOGOUT,
  REQ_RESET_PASSWORD,
  RESET_PASSWORD,
} from "../constants/actionTypes";

const actionReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case REQ_RESET_PASSWORD:
      return { ...state };
    case RESET_PASSWORD:
      return { ...state };
    default:
      return state;
  }
};
export default actionReducer;
