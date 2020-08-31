import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useState, useContext } from "react";
import Axios from "axios";
import AuthContext from "../../context/auth";
import { withRouter } from "react-router-dom";
import { useCallback } from "react";

const RegisterContainer = ({ history }) => {
  const [registering, setRegistering] = useState({
    username: "",
    nickname: "",
    password: "",
    passwordRepeat: "",
  });
  const [loading, setLoading] = useState(false);
  const { state, actions } = useContext(AuthContext);
  const { username, nickname, password, passwordRepeat } = registering;
  const { userInfo, auth } = state;
  const { setUserInfo, setAuth, setAuthError } = actions;

  // 컴포넌트 불러올 떄 작업
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

  // 이벤트 관련 로직
  const handleChange = useCallback(
    (e) => {
      setRegistering({ ...registering, [e.target.name]: [e.target.value] });
    },
    [registering]
  );

  const handleSubmit = useCallback(() => {
    if (!username || !nickname || !password || !passwordRepeat) {
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
          username,
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
  }, [
    nickname,
    passwordRepeat,
    password,
    setAuth,
    setAuthError,
    setUserInfo,
    username,
  ]);
  return (
    <Auth
      username={username}
      nickname={nickname}
      password={password}
      passwordRepeat={passwordRepeat}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default withRouter(RegisterContainer);
