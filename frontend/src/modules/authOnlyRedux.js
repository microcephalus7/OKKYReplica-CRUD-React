import axios from "axios";

const CHANGE_FIELD = "authOnly/CHANGE_FIELD";
const INITIALIZE = "authOnly/INITIALIZE";
const REGISTER = "authOnly/REGISTER";
const LOGIN = "authOnly/LOGIN";
const LOGIN_FAILURE = "authOnly/LOGIN_FAILURE";
const REGISTER_FAILURE = "authOnly/REGISTER_FAILURE";

export const changeField = ({ form, key, value }) => ({
  type: CHANGE_FIELD,
  form,
  key,
  value,
});
export const initialize = ({ form }) => ({
  type: INITIALIZE,
  form,
});

export const register = (data) => ({
  type: LOGIN,
  data,
});
export const registerError = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const login = (data) => ({
  type: LOGIN,
  data,
});
export const loginError = (error) => ({
  type: LOGIN_FAILURE,
  error,
});
const initialState = {
  login: {
    username: "",
    password: "",
  },
  register: {
    username: "",
    password: "",
    passwordRepeat: "",
    nickname: "",
  },
  auth: null,
  authError: null,
};

function authOnly(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.key]: action.value,
        },
      };
    case INITIALIZE:
      return {
        ...state,
        [action.form]: initialState[action.form],
      };
    case REGISTER:
      return {
        ...state,
        auth: action.data,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        authError: action.error,
      };
    case LOGIN:
      return { ...state, auth: action.data };
    case LOGIN_FAILURE:
      return { ...state, authError: action.error };
    default:
      return state;
  }
}
export default authOnly;
