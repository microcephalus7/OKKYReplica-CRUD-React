import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useState, useContext } from "react";
import Axios from "axios";
import AuthContext from "../../context/auth";
import { withRouter } from "react-router-dom";

const LoginContainer = ({ history }) => {
  const [loging, setLoging] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { state, actions } = useContext(AuthContext);
  const { username, password } = loging;
  const { userInfo, auth } = state;
  const { setUserInfo, setAuth, setAuthError } = actions;
  const handleChange = (e) => {
    setLoging({ ...loging, [e.target.name]: [e.target.value] });
  };
  useEffect(() => {
    if (!!auth) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(userInfo));
      } catch (e) {
        console.log(e);
      }
    }
  });
  const handleSubmit = () => {
    if (!username || !password) {
      alert("아이디, 비밀번호 칸을 전부 채워주세요");
      return null;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.post(`/users`, { username, password });
        setUserInfo(response.data);
        setAuth(true);
      } catch (e) {
        setAuthError(e);
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
      loading={loading}
    />
  );
};

export default withRouter(LoginContainer);
