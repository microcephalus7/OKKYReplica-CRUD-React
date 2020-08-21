import React, { useState, useContext } from "react";
import Writing from "../../components/Write/Writing";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../../context/auth";
const WritingContainer = ({ history, match }) => {
  const { boardCategory } = match.params;
  const { state } = useContext(AuthContext);
  const { userInfo, auth } = state;
  const [article, setArticle] = useState({
    title: "",
    body: "",
    category: boardCategory,
    username: userInfo.username,
  });
  const [categories, setCategories] = useState(null);
  const { title, body, category, username } = article;
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

export default withRouter(WritingContainer);
