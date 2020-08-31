import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritingPage from "./pages/WritingPage";
import { AuthProvider } from "./context/auth";
import { WriteProvider } from "./context/write";

const App = () => {
  return (
    <AuthProvider>
      <WriteProvider>
        <Route path="/" component={MainPage} exact />
        <Route path="/detail/:postId" component={DetailPage} />
        <Route path="/category/:category" component={BoardPage} />{" "}
        <Route
          path={["/writing/:boardCategory/:postId?"]}
          component={WritingPage}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </WriteProvider>
    </AuthProvider>
  );
};

export default App;
