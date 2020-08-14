import React from "react";
import Axios from "axios";
import SideNav from "../../components/common/SideNav";
import { useDispatch, useSelector } from "react-redux";
import {
  setSideNav,
  setSideNavSuccess,
  setSideNavFailure,
} from "../../modules/sideNav";
import { logOut } from "../../modules/user";

const SideNavContainerOnly = () => {
  const dispatch = useDispatch();

  return (
    <SideNav
      categories={categories}
      loading={loading}
      state={state}
      authLogOut={authLogOut}
    />
  );
};

export default SideNavContainerOnly;
