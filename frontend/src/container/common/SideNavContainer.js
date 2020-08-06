import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Axios from "axios";
import SideNav from "../../components/common/SideNav";
import usePromise from "../../lib/hooks/usePromise";
import AuthContext from "../../context/auth";

const SideNavContainer = () => {
  const { state, actions } = useContext(AuthContext);
  const [loading, resolved, error] = usePromise(() => {
    return Axios.get("/categories");
  }, []);

  if (!resolved) {
    return null;
  }
  if (error) {
    error(error);
  }
  const categories = resolved.data;

  const { setUserInfo, setAuth, setAuthError } = actions;
  return <SideNav categories={categories} loading={loading} state={state} />;
};

export default SideNavContainer;
