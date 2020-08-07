import React, { useState, useEffect } from "react";
import Axios from "axios";
import Board from "../../components/Main/Board";

const BoardContainer = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(
          `/articles?category=${category}&_start=0&_end=10`
        );
        setArticles(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  return <Board articles={articles} loading={loading} />;
};

export default BoardContainer;
