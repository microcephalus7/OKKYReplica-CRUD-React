import React, { useState, useEffect } from "react";
import Axios from "axios";
import Board from "../../components/Main/Board";

const BoardContainer = () => {
  const [categories, setCategories] = useState(null);
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responseCategory = await Axios.get("/categories");
        const responseArticles = await Axios.get("/articles");
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
    <Board loading={loading} categories={categories} articles={articles} />
  );
};

export default BoardContainer;
