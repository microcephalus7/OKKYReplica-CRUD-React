import React, { useState, useEffect } from "react";
import CategoryBoard from "../../components/Posts/CategoryBoard";
import { withRouter } from "react-router-dom";
import Axios from "axios";

const CategoryBoardContainer = ({ match }) => {
  const { category } = match.params;
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(`/articles?category=${category}`);
        setArticles(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <CategoryBoard
        category={category}
        articles={articles}
        loading={loading}
      />
    </>
  );
};

export default withRouter(CategoryBoardContainer);
