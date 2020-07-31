import React, { useState } from "react";
import Writing from "../../components/Write/Writing";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const WritingContainer = ({ history }) => {
  const [article, setArticle] = useState({
    title: "",
    body: "",
    category: "Free",
    comment: [],
  });
  const [categories, setCategories] = useState(null);
  const { title, body, category, comment } = article;
  const [loading, setLoading] = useState(false);
  const [newArticle, setNewArticle] = useState(null);

  useEffect(() => {
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
    if (newArticle) {
      history.push(`detail/${newArticle.id}`);
    }
  }, [newArticle, history]);
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
        const response = await Axios.post(`/articles`, {
          title,
          body,
          category,
          comment,
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
    />
  );
};

export default withRouter(WritingContainer);
