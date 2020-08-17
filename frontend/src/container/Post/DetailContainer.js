import React, { useState, useEffect, useContext } from "react";
import Detail from "../../components/Post/Detail";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import AuthContext from "../../context/auth";

const DetailContainer = ({ match, history }) => {
  const { postId } = match.params;
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState(null);
  const { state } = useContext(AuthContext);
  const [comment, setComment] = useState({
    body: "",
    username: state.userInfo.id,
    articleId: postId,
  });
  const { body, username, articleId } = comment;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [updateComment, setUpdateComment] = useState({
    body: "",
    id: "",
  });
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
  const commentSubmit = () => {
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
  const newCommentSet = (key) => {
    setNewComment(comments[key]);
  };
  const commentUpdate = () => {
    const fetchData = async () => {
      try {
        const { body, id } = updateComment;
        const response = await Axios.patch(`/comments/${id}`, { body });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  };
  const commentDelete = (key) => {
    const fetchData = async () => {
      try {
        const response = await Axios.delete(`/comments/${key}`);
      } catch (e) {}
    };
    fetchData();
  };
  const commentChange = (e) => {
    setNewComment({
      ...newComment,
      body: e.target.value,
    });
  };
  const articleChange = (e) => {
    setComment({ ...comment, body: e.target.value });
  };
  const articleDelete = () => {
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
  const articleUpdate = () => {
    history.push(`/update/${postId}`);
  };

  return (
    <Detail
      article={article}
      loading={loading}
      visible={visible}
      setVisible={setVisible}
      handleDelete={articleDelete}
      handleUpdate={articleUpdate}
      handleSubmit={commentSubmit}
      handleChange={articleChange}
      comments={comments}
      body={body}
      state={state}
    />
  );
};

export default withRouter(DetailContainer);
