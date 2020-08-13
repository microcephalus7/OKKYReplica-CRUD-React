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

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ authOnlyRedux }) => ({
    form: authOnlyRedux.login,
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
  const handleSubmit = () => {
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
  useEffect(() => {
    dispatch(initialize("login"));
  }, [dispatch]);
  return (
    <Auth
      login
      username={username}
      password={password}
      handleChange={handleChange}
      hadnleSubmit={handleSubmit}
    />
  );
};

export default withRouter(LoginContainer);
