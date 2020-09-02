import React, { useContext } from "react";
import AuthContext from "./context/auth";

const AuthTemplate = ({ children }) => {
  const { actions, state } = useContext(AuthContext);
  const { userInfo } = state;
  const { setUserInfo, setAuth } = actions;
  const loadUser = () => {
    try {
      const user = localStorage.getItem("user");
      if (!user) return;
      const userParse = JSON.parse(user);
      setUserInfo({
        ...userInfo,
        username: userParse.username[0],
        password: userParse.password[0],
        id: userParse.id,
      });
      setAuth(true);
    } catch (e) {
      console.log("로컬 스토리지가 작동하지 않습니다");
    }
  };
  loadUser();
  return <>{children}</>;
};

export default AuthTemplate;
