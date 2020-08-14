const USER_SET = "user/USER_SET";
const USER_CHECK = "user/USER_CHECK";
const USER_CHECK_SUCCESS = "user/USER_CHECK_SUCCESS";
const USER_CHECK_FAILURE = "user/USER_CHECK_FAILURE";
const LOGOUT = "user/LOGOUT";

export const userSet = ({ info }) => ({
  type: USER_SET,
  info,
});

export const userCheck = () => ({
  type: USER_CHECK,
});

export const userCheckSuccess = (data) => ({
  type: USER_CHECK_SUCCESS,
  data,
});

export const userCheckFailure = (error) => ({
  type: USER_CHECK_FAILURE,
  error,
});

export const logOut = () => ({
  type: LOGOUT,
});

const initialState = {
  user: null,
  checkError: null,
  loading: false,
};

function user(state = initialState, action) {
  switch (action.type) {
    case USER_SET:
      return {
        ...state,
        user: action.info,
      };
    case USER_CHECK:
      return {
        ...state,
        loading: true,
      };
    case USER_CHECK_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case USER_CHECK_FAILURE:
      return {
        ...state,
        checkError: action.error,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default user;
