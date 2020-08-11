import React from "react";
import LoginContainer from "../container/auth/LoginContainerRedux";
import SideNavContainer from "../container/common/SideNavContainer";
const LoginPage = () => {
  return (
    <>
      <SideNavContainer />
      <LoginContainer />
    </>
  );
};

export default LoginPage;
