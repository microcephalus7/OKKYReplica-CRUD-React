import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import { withRouter } from "react-router-dom";

const RegisterContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const { username, password, nickname, passwordRepeat } = form;
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
    e.preventDefault();
    if (!username || !nickname || !password || !passwordRepeat) {
      alert("아이디, 비밀번호 칸을 전부 채워주세요");
      return null;
    }
    if (password !== passwordRepeat) {
      alert("비빌번호가 일치하지 않습니다");
      return null;
    }
    dispatch(register({ username, nickname, password }));
  };
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);
  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
    }
  }, [auth, authError]);
  return (
    <Auth
      username={username}
      password={password}
      nickname={nickname}
      passwordRepeat={passwordRepeat}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(RegisterContainer);
