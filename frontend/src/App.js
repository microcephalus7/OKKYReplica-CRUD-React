import React, { useContext } from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritingPage from "./pages/WritingPage";
import AuthContext from "./context/auth";

const App = () => {
  // 앱 실행 시 localStorage 의 user 부분 확인
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
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/detail/:postId" component={DetailPage} />
      <Route path="/category/:category" component={BoardPage} />{" "}
      <Route
        path={["/writing/:boardCategory/:postId?"]}
        component={WritingPage}
      />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </>
  );
};

export default App;
