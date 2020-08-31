import React, { useState, useEffect } from "react";
import Axios from "axios";
import Board from "../../components/Main/Board";
import usePromise from "../../lib/hooks/usePromise";

const BoardContainer = ({ category }) => {
  // 게시물 state
  const [articles, setArticles] = useState(null);
  // 로딩 state
  const [loading, setLoading] = useState(false);
  // 컴포넌트 렌더링 시 게시물 세팅
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
