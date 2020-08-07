import React, { useState, useContext } from "react";
import Writing from "../../components/Write/Writing";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../../context/auth";
const WritingContainer = ({ history, match }) => {
  const { category } = match.params;
  const { state } = useContext(AuthContext);
  const { userInfo, auth } = state;
  const [article, setArticle] = useState({
    title: "",
    body: "",
    articleCategory: category,
    username: userInfo.username,
  });
  const [categories, setCategories] = useState(null);
  const { title, body, articleCategory, username } = article;
  const [loading, setLoading] = useState(false);
  const [newArticle, setNewArticle] = useState(null);

  useEffect(() => {
    if (!auth) {
      alert("로그인을 해야 글 쓰기가 가능합니다");
      history.push("/");
    }
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
    const nextState = { ...article, [e.target.name]: e.target.value };
    setArticle(nextState);
  };
  const handleSubmit = () => {
    if (!title || !body || !articleCategory) {
      alert("빈 부분을 채워주세요!");
      return null;
    }
    const fetchData = async () => {
      try {
        const response = await Axios.post(`/articles`, {
          title,
          body,
          articleCategory,
          username,
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
      category={articleCategory}
      loading={loading}
      categories={categories}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default withRouter(WritingContainer);
