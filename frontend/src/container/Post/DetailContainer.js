import React, { useState, useEffect } from "react";
import Detail from "../../components/Post/Detail";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const DetailContainer = ({ match, history }) => {
  const { postId } = match.params;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(`/articles/${postId}`);
        setArticle(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [postId]);
  const handleDelete = () => {
    const fetchData = async () => {
      try {
        const response = await Axios.delete(`/articles/${postId}`);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    history.push(`/`);
  };
  const handleUpdate = () => {
    history.push(`/update/${postId}`);
  };
  return (
    <Detail
      article={article}
      loading={loading}
      visible={visible}
      setVisible={setVisible}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );
};

export default withRouter(DetailContainer);
