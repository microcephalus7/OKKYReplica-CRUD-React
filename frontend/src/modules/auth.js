import { createAction, handleActions } from "redux-actions";

const CHANGE_FILED = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

export const changeField = createAction(
  CHANGE_FILED,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  register: {
    id: "",
    nickname: "",
    password: "",
    passwordRepeat: "",
  },
  login: { id: "", password: "" },
};

const auth = handleActions(
  {
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: {
        ...state[form],
        [key]: value,
      },
    }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

export default auth;
