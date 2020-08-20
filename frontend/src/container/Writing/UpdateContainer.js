import React, { useState, useContext } from "react";
import Writing from "../../components/Write/Writing";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../../context/auth";

const UpdateContainer = ({ match, history }) => {
  const { postId } = match.params;
  const [article, setArticle] = useState({
    title: "",
    body: "",
    category: "Free",
  });
  const [categories, setCategories] = useState(null);
  const { title, body, category } = article;
  const [loading, setLoading] = useState(false);
  const [newArticle, setNewArticle] = useState(null);
  const { state } = useContext(AuthContext);
  const { auth } = state;

  useEffect(() => {
    if (!auth) {
      alert("로그인을 해야 글 쓰기가 가능합니다");
      history.push("/");
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const responseArticle = await Axios.get(`/articles/${postId}`);
        const responseCategories = await Axios.get("/categories");
        setCategories(responseCategories.data);
        const { title, body, category } = responseArticle.data;
        setArticle({
          title: title,
          body: body,
          category: category,
        });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    if (!!newArticle) {
      history.push(`/detail/${newArticle.id}`);
    }
  }, [newArticle, history, postId, auth]);
  const handleChange = (e) => {
    const nextState = { ...article, [e.target.name]: e.target.value };
    setArticle(nextState);
  };
  const handleSubmit = () => {
    if (!title || !body || !category) {
      alert("빈 부분을 채워주세요!");
      return null;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.patch(`/articles/${postId}`, {
          title,
          body,
          category,
        });
        setNewArticle(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
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
      update
    />
  );
};

export default withRouter(UpdateContainer);
