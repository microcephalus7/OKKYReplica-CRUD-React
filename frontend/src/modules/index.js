import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import { all } from "redux-saga/effects";
import authOnlyRedux from "./authOnlyRedux";

const rootReducer = combineReducers({
  auth,
  loading,
  authOnlyRedux,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
