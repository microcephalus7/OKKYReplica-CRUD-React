import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritingPage from "./pages/WritingPage";
import UpdatePage from "./pages/UpdatePage";
import { useState } from "react";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/detail/:postId" component={DetailPage} />
      <Route path="/category/:category" component={BoardPage} />
      <Route path="/writing" component={WritingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/update/:postId" component={UpdatePage} />
    </>
  );
};

export default App;
