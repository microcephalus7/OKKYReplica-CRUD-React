const SET_SIDENAV = "sideNav/SET_SIDENAV";
const SET_SIDENAV_SUCCESS = "sideNav/SET_SIDENAV_SUCCESS";
const SET_SIDENAV_FAILURE = "sideNav/SET_SIDENAV_SUCCESS";

export const setSideNav = () => ({
  type: SET_SIDENAV,
});
export const setSideNavSuccess = (data) => ({
  type: SET_SIDENAV_SUCCESS,
  data,
});
export const setSideNavFailure = (error) => ({
  type: SET_SIDENAV_FAILURE,
  error,
});

const initialState = {
  categories: null,
  cateError: null,
  loading: false,
};

function sideNav(state = initialState, action) {
  switch (action.type) {
    case SET_SIDENAV:
      return {
        ...state,
        loading: true,
      };
    case SET_SIDENAV_SUCCESS:
      return {
        ...state,
        categories: action.data,
      };
    case SET_SIDENAV_FAILURE:
      return {
        ...state,
        cateError: action.error,
      };
    default:
      return state;
  }
}
