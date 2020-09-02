import React, { useContext, useState } from "react";
import Axios from "axios";
import SideNav from "../../components/common/SideNav";
import usePromise from "../../lib/hooks/usePromise";
import AuthContext from "../../context/auth";
import { withRouter } from "react-router-dom";

const SideNavContainer = ({ history }) => {
  const { state, actions } = useContext(AuthContext);
  const { setUserInfo, setAuth } = actions;
  // 페이지 리로드 관련
  // 전역 state 로 변경 필요.
  const [reload, setReload] = useState(false);

  const [loading, resolved, error] = usePromise(() => {
    return Axios.get("/categories");
  }, [reload]);

  if (!resolved) {
    return null;
  }
  if (error) {
    error(error);
  }
  const categories = resolved.data;

  // 로고 클릭 시 Home 화면 push
  // 수정필요
  const handleReload = () => {
    history.push("/");
    setReload(!reload);
  };
  const authLogOut = () => {
    setUserInfo(null);
    setAuth(false);
    localStorage.removeItem("user"); // localStorage 에서 userInfo 제거
  };
  return (
    <SideNav
      categories={categories}
      loading={loading}
      state={state}
      authLogOut={authLogOut}
      handleReload={handleReload}
    />
  );
};

export default withRouter(SideNavContainer);
