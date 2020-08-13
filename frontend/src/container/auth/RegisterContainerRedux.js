import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  register,
  initialize,
  loginError,
} from "../../modules/authOnlyRedux";
import { withRouter } from "react-router-dom";
import axios from "axios";

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ authOnlyRedux }) => ({
    form: authOnlyRedux.register,
  }));
  const { username, password, passwordRepeat, nickname } = form;
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
  const handleSubmit = () => {
    if (!username || !password || !nickname || !passwordRepeat) {
      alert("빈 부분을 채워주세요");
      return null;
    }
    if (password !== passwordRepeat) {
      alert("아이디가 일치하지 않습니다");
      return null;
    }
    const fetchData = async () => {
      try {
        const response = await axios.post(`/users`, {
          username,
          password,
          nickname,
        });
        const data = response.data;
        dispatch(register(data));
      } catch (error) {
        dispatch(loginError(error));
      }
    };
    fetchData();
  };

  return (
    <Auth
      username={username}
      password={password}
      passwordRepeat={passwordRepeat}
      nickname={nickname}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(LoginContainer);
