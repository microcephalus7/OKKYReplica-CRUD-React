import React, { useContext } from "react";
import Comment from "../../components/Post/Comment";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import AuthContext from "../../context/auth";
const CommentContainer = ({ com }) => {
  const [updateInput, setUpdateInput] = useState(false);
  // 업데이트 댓글
  const [updateComment, setUpdateComment] = useState({
    body: "",
    id: "",
  });
  // 댓글 업데이트 시 return 값
  const [newUpdateComment, setNewUpdateComment] = useState(null);
  // 댓글 삭제시 참고 state
  const [deleteComment, setDeleteComment] = useState(false);
  // 전역 변수(user 관련)
  const { state } = useContext(AuthContext);
  useEffect(() => {}, [newUpdateComment, deleteComment]);
  const updateCommentSettting = () => {
    setUpdateComment({
      ...updateComment,
      body: com.body,
      id: com.id,
    });
  };
  const updateCommentChange = (e) => {
    setUpdateComment({
      ...updateComment,
      body: e.target.value,
    });
  };
  const updateCommentSubmit = (id) => {
    const fetchData = async () => {
      try {
        const { body, id } = updateComment;
        const response = await Axios.patch(`/comments/${id}`, { body });
        setNewUpdateComment(response.data);
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
        setDeleteComment(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  };
  return (
    <Comment
      updateInput={updateInput}
      setUpdateInput={setUpdateInput}
      com={com}
      state={state}
    />
  );
};

export default CommentContainer;
