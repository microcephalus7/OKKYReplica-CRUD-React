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
    comment: null,
  });
  const [categories, setCategories] = useState(null);
  const { title, body, category, comment } = article;
  const [loading, setLoading] = useState(false);

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
  }, []);
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
        Axios.post(`/articles`, { title, body, category, comment });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    history.push("/");
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
    />
  );
};

export default withRouter(WritingContainer);
