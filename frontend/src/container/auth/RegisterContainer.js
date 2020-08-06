import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useState, useContext } from "react";
import Axios from "axios";
import AuthContext from "../../context/auth";
import { withRouter } from "react-router-dom";

const RegisterContainer = ({ history }) => {
  const [registering, setRegistering] = useState({
    id: "",
    nickname: "",
    password: "",
    passwordRepeat: "",
  });
  const [loading, setLoading] = useState(false);
  const { state, actions } = useContext(AuthContext);
  const { id, nickname, password, passwordRepeat } = registering;
  const { userInfo, auth, authError } = state;
  const { setUserInfo, setAuth, setAuthError } = actions;
  const handleChange = (e) => {
    setRegistering({ ...registering, [e.target.name]: [e.target.value] });
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
    if (!id || !nickname || !password || !passwordRepeat) {
      alert("아이디, 비밀번호 칸을 전부 채워주세요");
      return null;
    }
    if (password !== passwordRepeat) {
      alert("비빌번호가 일치하지 않습니다");
      return null;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.post(`/user/register`, {
          id,
          nickname,
          password,
        });
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
      id={id}
      nickname={nickname}
      password={password}
      passwordRepeat={passwordRepeat}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(RegisterContainer);
