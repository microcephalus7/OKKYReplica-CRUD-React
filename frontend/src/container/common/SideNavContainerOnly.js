import React, { useEffect } from "react";
import Axios from "axios";
import SideNav from "../../components/common/SideNavOnly";
import { useDispatch, useSelector } from "react-redux";
import {
  setSideNav,
  setSideNavSuccess,
  setSideNavFailure,
} from "../../modules/sideNav";
import { logOut } from "../../modules/user";

const SideNavContainerOnly = () => {
  const dispatch = useDispatch();
  const { categories, loading, userInfo } = useSelector(
    ({ sideNav, user }) => ({
      categories: sideNav.categories,
      loading: sideNav.loading,
      userInfo: user.userInfo,
    })
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setSideNav());
      try {
        const response = await Axios.get(`/categories`);
        dispatch(setSideNavSuccess(response.data));
      } catch (e) {
        dispatch(setSideNavFailure(e));
      }
    };
    fetchData();
  }, [dispatch]);
  const authLogOut = () => {
    dispatch(logOut());
  };
  return (
    <SideNav
      categories={categories}
      loading={loading}
      userInfo={userInfo}
      authLogOut={authLogOut}
    />
  );
};

export default SideNavContainerOnly;
