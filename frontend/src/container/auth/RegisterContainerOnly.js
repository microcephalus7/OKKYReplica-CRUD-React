import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initialize,
  loginError,
  register,
} from "../../modules/authOnlyRedux";
import { userSet } from "../../modules/user";
import { withRouter } from "react-router-dom";
import axios from "axios";

const ReigsterContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, user } = useSelector(({ authOnlyRedux, user }) => ({
    form: authOnlyRedux.register,
    user: user.user,
  }));
  const { username, password, passwordRepeat, nickname } = form;

  useEffect(() => {
    if (user) {
      history.push("/");
    }
    dispatch(initialize("register"));
  }, [dispatch, history, user]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const handleSubmit = (e) => {
    if (!username || !password || !nickname || !passwordRepeat) {
      alert("빈 부분을 채워주세요");
      return null;
    }
    if (password !== passwordRepeat) {
      alert("비밀번호가 일치하지 않습니다");
      return null;
    }
    const fetchData = async () => {
      try {
        const response = await axios.post(`/users`, { username, password });
        const data = response.data;
        dispatch(register(data));
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
      nickname={nickname}
      passwordRepeat={passwordRepeat}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(ReigsterContainer);
