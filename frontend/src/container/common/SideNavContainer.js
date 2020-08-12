import React, { useContext } from "react";
import Axios from "axios";
import SideNav from "../../components/common/SideNav";
import usePromise from "../../lib/hooks/usePromise";
import AuthContext from "../../context/auth";

const SideNavContainer = () => {
  const { state, actions } = useContext(AuthContext);
  const { setUserInfo, setAuth } = actions;
  const [loading, resolved, error] = usePromise(() => {
    return Axios.get("/categories");
  }, []);

  if (!resolved) {
    return null;
  }
  if (error) {
    error(error);
  }
  const categories = resolved.data;
  const authLogOut = () => {
    setUserInfo(null);
    setAuth(false);
    localStorage.removeItem("userInfo"); // localStorage 에서 userInfo 제거
  };
  return (
    <SideNav
      categories={categories}
      loading={loading}
      state={state}
      authLogOut={authLogOut}
    />
  );
};

export default SideNavContainer;
