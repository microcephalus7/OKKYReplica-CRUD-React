import React, { useState, useEffect } from "react";
import Detail from "../../components/Post/Detail";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const DetailContainer = ({ match, history }) => {
  const { postId } = match.params;
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState({
    body: "",
    username: "",
    articleId: postId,
  });
  const [newComment, setNewComment] = useState(null);
  const { body, username, articleId } = comment;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responseArticle = await Axios.get(`/articles/${postId}`);
        const responseComments = await Axios.get(
          `/comments?articleId=${postId}`
        );
        setArticle(responseArticle.data);
        setComments(responseComments.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [postId, newComment]);
  const handleSubmit = () => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(`/comments`, {
          body,
          username,
          articleId,
        });
        setNewComment(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  };
  const handleChange = (e) => {
    setComment({ ...comment, body: e.target.value });
  };
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
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      comments={comments}
      body={body}
    />
  );
};

export default withRouter(DetailContainer);
