import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritingPage from "./pages/WritingPage";

const App = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/@:username/:postId" component={DetailPage} exact />
      <Route path="/:category" component={BoardPage} exact />
      <Route path="/writing" component={WritingPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact />
    </>
  );
};

export default App;
