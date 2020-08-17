import React from "react";
import LoginContainer from "../container/auth/LoginContainerOnly";
import SideNavContainer from "../container/common/SideNavContainerOnly";
const LoginPage = () => {
  return (
    <>
      <SideNavContainer />
      <LoginContainer />
    </>
  );
};

export default LoginPage;
