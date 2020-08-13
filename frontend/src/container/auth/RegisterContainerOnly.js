import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  login,
  initialize,
  loginError,
} from "../../modules/authOnlyRedux";
import { withRouter } from "react-router-dom";
import axios from "axios";

const ReigsterContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ authOnlyRedux }) => ({
    form: authOnlyRedux.register,
  }));
  const { username, password, passwordConfirm, nickname } = form;
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
  useEffect(() => {
    dispatch(initialize("register"));
  }, [dispatch]);
  const handleSubmit = (e) => {
    if (!username || !password || !nickname || !passwordConfirm) {
      alert("빈 부분을 채워주세요");
      return null;
    }
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다");
      return null;
    }
    const fetchData = async () => {
      try {
        const response = await axios.post(`/users`, { username, password });
        const data = response.data;
        dispatch(login(data));
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

export default withRouter(ReigsterContainer);
