import React, { useState, useEffect } from "react";
import CategoryBoard from "../../components/Posts/CategoryBoard";
import { withRouter } from "react-router-dom";
import Axios from "axios";

const CategoryBoardContainer = ({ match }) => {
  const { category } = match.params;
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(
          `/articles?category=${category}&_page=${page}&_limit=15`
        );
        setArticles(response.data);
        setLastPage(
          Number(
            response.headers.link
              .split(",")[2]
              .split("&_limit")[0]
              .split("page=")[1]
          )
        );
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category, page]);
  return (
    <>
      <CategoryBoard
        category={category}
        articles={articles}
        loading={loading}
        page={page}
        setPage={setPage}
        lastPage={lastPage}
      />
    </>
  );
};

export default withRouter(CategoryBoardContainer);
