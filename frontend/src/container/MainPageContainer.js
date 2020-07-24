import React, { useEffect, useState } from "react";
import SideNav from "../components/common/SideNav";
import Board from "../components/Main/Board";
import axios from "axios";

const MainPageContainer = () => {
  const [categories, setCategories] = useState(null);
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responseCategory = await axios.get("/categories");
        const responseArticles = await axios.get("/articles");
        setCategories(responseCategory.data);
        setArticles(responseArticles.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <SideNav loading={loading} categories={categories} />
      <Board loading={loading} categories={categories} articles={articles} />
    </>
  );
};

export default MainPageContainer;
