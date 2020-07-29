import React, { useState } from "react";
import Writing from "../../components/Write/Writing";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const WritingContainer = ({ history }) => {
  const [article, setArticle] = useState({
    title: "",
    body: "",
    category: "",
  });
  const [categories, setCategories] = useState(null);
  const { title, body, category } = article;
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
    const fetchData = async () => {
      setLoading(true);
      try {
        Axios.post(`/articles`, { title, body, category });
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
