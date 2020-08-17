import React from "react";
import SideNavContainer from "../container/common/SideNavContainerOnly";
import RegisterContainer from "../container/auth/RegisterContainerRedux";

const RegisterPage = () => {
  return (
    <>
      <SideNavContainer />
      <RegisterContainer />
    </>
  );
};

export default RegisterPage;
