import React, { useContext } from "react";
import Comment from "../../components/Post/Comment";
import { useState } from "react";
import Axios from "axios";
import AuthContext from "../../context/auth";
const CommentContainer = ({ com, setNewUpdateComment, setDeleteComment }) => {
  // 댓글 업데이트 스위치
  const [updateInput, setUpdateInput] = useState(false);
  // 업데이트 댓글
  const [updateComment, setUpdateComment] = useState({
    body: "",
    id: "",
  });

  // 전역 변수(user 관련)
  const { state } = useContext(AuthContext);

  // 업데이트 시 textArea 세팅
  const updateCommentSettting = () => {
    setUpdateComment({
      ...updateComment,
      body: com.body,
      id: com.id,
    });
  };
  // 커멘트 업데이트 시 state 변화
  const updateCommentChange = (e) => {
    setUpdateComment({
      ...updateComment,
      body: e.target.value,
    });
  };
  // 커멘트 업데이트 submit 로직
  const updateCommentSubmit = (id) => {
    const { body } = updateComment;
    if (!body) {
      alert("댓글을 입력해주세요!");
      return null;
    }
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
  // 커멘트 딜리트 로직
  const commentDelete = (key) => {
    const fetchData = async () => {
      try {
        const response = await Axios.delete(`/comments/${key}`);
        setDeleteComment(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  };
  return (
    <Comment
      updateInput={updateInput}
      updateComment={updateComment}
      setUpdateInput={setUpdateInput}
      updateCommentSettting={updateCommentSettting}
      updateCommentChange={updateCommentChange}
      updateCommentSubmit={updateCommentSubmit}
      commentDelete={commentDelete}
      com={com}
      state={state}
    />
  );
};

export default CommentContainer;
