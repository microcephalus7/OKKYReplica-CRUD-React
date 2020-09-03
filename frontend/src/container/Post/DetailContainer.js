import React, { useState, useEffect, useContext, useCallback } from "react";
import Detail from "../../components/Post/Detail";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import AuthContext from "../../context/auth";

const DetailContainer = ({ match, history }) => {
  // 파라미터
  const { postId } = match.params;
  // 게시글
  const [article, setArticle] = useState(null);
  // 댓글
  const [comments, setComments] = useState(null);
  // 로딩
  const [loading, setLoading] = useState(false);
  // 전역 변수(user 관련)
  const { state: AuthState } = useContext(AuthContext);

  // 댓글 입력
  const [comment, setComment] = useState({
    body: "",
    articleId: postId,
  });
  // username

  const [error, setError] = useState(null);
  // 댓글 입력 시 return 값
  const [newComment, setNewComment] = useState(null);
  // 댓글 업데이트 시 return 값
  const [newUpdateComment, setNewUpdateComment] = useState(null);
  // 댓글 삭제시 참고 state
  const [deleteComment, setDeleteComment] = useState(null);

  // 렌더링, 리렌더링 라이프 사이클 Hooks
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
  }, [postId, newComment, newUpdateComment, deleteComment]);

  // 게시글 관련 로직
  const articleUpdate = useCallback(() => {
    history.push(`/writing/${article.category}/${postId}`);
  }, [history, postId, article]);

  const articleDelete = useCallback(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.delete(`/articles/${postId}`);
        setError(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    history.push(`/`);
  }, [history, postId]);
  // 댓글 관련 로직
  const commentChange = useCallback(
    (e) => {
      setComment({ ...comment, body: e.target.value });
    },
    [comment]
  );
  const commentSubmit = useCallback(() => {
    const { body } = comment;
    if (!body) {
      alert("댓글을 입력해 주세요!");
      return null;
    }
    const fetchData = async () => {
      try {
        const { body, articleId } = comment;
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user.username[0];
        const date = Date.now();
        const response = await Axios.post(`/comments`, {
          body,
          username,
          articleId,
          date,
        });
        setNewComment(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [comment]);

  return (
    <Detail
      error={error}
      article={article}
      comments={comments}
      loading={loading}
      state={AuthState}
      comment={comment}
      articleUpdate={articleUpdate}
      articleDelete={articleDelete}
      commentChange={commentChange}
      commentSubmit={commentSubmit}
      setNewUpdateComment={setNewUpdateComment}
      setDeleteComment={setDeleteComment}
    />
  );
};

export default withRouter(DetailContainer);
