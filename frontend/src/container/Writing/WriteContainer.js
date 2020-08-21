import React, { useState, useContext } from "react";
import Writing from "../../components/Write/Writing";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../../context/auth";
import WriteContext from "../../context/write";
import CategoriesContext from "../../context/categories";
const WriteContainer = ({ history, match }) => {
  // 파라미터 값
  const { boardCategory } = match.params;
  // user 전역 값
  const { state: authState } = useContext(AuthContext);
  const { userInfo, auth } = authState;
  // Write 전역 값
  const { state: writeState, actions: WriteActions } = useContext(WriteContext);
  const { article, newArticle } = writeState;
  const { title, body, category, username } = article;
  const { setArticle, setNewArticle } = WriteActions;
  // Categories 전역 값
  const { state: CategoriesState, actions: CategoriesActions } = useContext(
    CategoriesContext
  );
  const { categories } = CategoriesState;
  const { setCategories } = CategoriesActions;
  // 로딩 값
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!auth) {
      alert("로그인을 해야 글 쓰기가 가능합니다");
      history.push("/");
    }
    // 페이지 접속 시 Categories 설정
    setArticle({ ...newArticle, category: boardCategory });
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get("/categories");
        setCategories(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    if (!!newArticle) {
      history.push(`/detail/${newArticle.id}`);
    }
  }, [history, newArticle, auth]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (!title || !body || !category) {
      alert("빈 부분을 채워주세요!");
      return null;
    }
    const fetchData = async () => {
      try {
        const date = Date.now();
        const response = await Axios.post(`/articles`, {
          title,
          body,
          category,
          username,
          date,
        });
        setNewArticle(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  };
  const handleCancel = () => {
    history.goBack();
  };
  return (
    <Writing
      title={title}
      body={body}
      category={category}
      loading={loading}
      categories={categories}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default withRouter(WriteContainer);
