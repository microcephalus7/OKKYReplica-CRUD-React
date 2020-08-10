import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritingPage from "./pages/WritingPage";
import UpdatePage from "./pages/UpdatePage";
import { AuthProvider } from "./context/auth";
import AuthContext from "./context/auth";
import { useContext } from "react";

const App = () => {
  const { actions } = useContext(AuthContext);
  const { setUserInfo, setAuth, setAuthError } = actions;

  useEffect(() => {
    function loadUser() {
      try {
        const user = localStorage.getItem("userInfo");
        if (!user) return;
        setUserInfo(user);
        setAuth(true);
      } catch (e) {
        setAuthError(e);
      }
    }
    loadUser();
  });

  return (
    <AuthProvider>
      <Route path="/" component={MainPage} exact />
      <Route path="/detail/:postId" component={DetailPage} />
      <Route path="/category/:category" component={BoardPage} />
      <Route path="/writing/:boardCategory?" component={WritingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/update/:postId" component={UpdatePage} />
    </AuthProvider>
  );
};

export default App;
