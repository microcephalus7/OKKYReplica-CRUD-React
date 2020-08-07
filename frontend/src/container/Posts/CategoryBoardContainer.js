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
  const nextPage = () => {
    if (page === lastPage) {
      alert("마지막 페이지 입니다");
      return null;
    }
    setPage(page + 1);
  };
  const prevPage = () => {
    if (page === 1) {
      alert("첫 번째 페이지 입니다");
      return null;
    }
    setPage(page - 1);
  };
  const list = [];
  const pageSet = () => {
    for (let i = 1; i <= lastPage; i++) {
      list.push(i);
    }
  };
  pageSet();
  return (
    <>
      <CategoryBoard
        category={category}
        articles={articles}
        loading={loading}
        page={page}
        lastPage={lastPage}
        nextPage={nextPage}
        prevPage={prevPage}
        setPage={setPage}
        list={list}
      />
    </>
  );
};

export default withRouter(CategoryBoardContainer);
