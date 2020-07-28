import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import SideNav from "../../components/common/SideNav";

const SideNavContainer = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responseCategory = await Axios.get("/categories");
        setCategories(responseCategory.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return <SideNav categories={categories} loading={loading} />;
};

export default SideNavContainer;
