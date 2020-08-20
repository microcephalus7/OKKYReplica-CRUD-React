import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  login,
  initialize,
  loginError,
} from "../../modules/authOnlyRedux";
import { userSet } from "../../modules/user";
import { withRouter } from "react-router-dom";
import axios from "axios";

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, user } = useSelector(({ authOnlyRedux, user }) => ({
    form: authOnlyRedux.login,
    user: user.userInfo,
  }));
  const { username, password } = form;
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };
  useEffect(() => {
    if (user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로컬 저장소가 작동하지 않습니다");
      }
    }
    dispatch(initialize("login"));
  }, [dispatch, history, user]);
  const handleSubmit = () => {
    if (!username || !password) {
      alert("빈 부분을 채워주세요");
      return null;
    }
    const fetchData = async () => {
      try {
        const response = await axios.post(`/users`, { username, password });
        const data = response.data;
        dispatch(login(data));
        dispatch(userSet(data));
      } catch (error) {
        dispatch(loginError(error));
      }
    };
    fetchData();
  };

  return (
    <Auth
      login
      username={username}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(LoginContainer);
