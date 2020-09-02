import React, { useContext } from "react";
import AuthContext from "./context/auth";

const AuthTemplate = ({ children }) => {
  const { actions } = useContext(AuthContext);

  const { setUserInfo, setAuth } = actions;
  const loadUser = () => {
    try {
      const user = localStorage.getItem("user");
      if (!user) return;
      setUserInfo(user);
      setAuth(true);
    } catch (e) {
      console.log("로컬 스토리지가 작동하지 않습니다");
    }
  };
  loadUser();
  return <>{children}</>;
};

export default AuthTemplate;
