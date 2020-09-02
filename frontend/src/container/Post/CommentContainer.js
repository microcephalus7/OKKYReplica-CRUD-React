import React, { useContext, useCallback } from "react";
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

  // 이벤트 관련 로직
  // 업데이트 시 textArea 세팅
  const updateCommentSettting = useCallback(() => {
    setUpdateInput(true);
    setUpdateComment({
      ...updateComment,
      body: com.body,
      id: com.id,
    });
  }, [com, updateComment]);
  // 업데이트 취소 시 로직
  const updateCommentCancel = useCallback(() => {
    setUpdateInput(false);
    setUpdateComment(updateComment);
  }, [updateComment]);
  // 커멘트 업데이트 시 state 변화
  const updateCommentChange = useCallback(
    (e) => {
      setUpdateComment({
        ...updateComment,
        body: e.target.value,
      });
    },
    [updateComment]
  );
  // 커멘트 업데이트 submit 로직
  const updateCommentSubmit = useCallback(() => {
    const { body } = updateComment;
    if (!body) {
      alert("댓글을 입력해주세요!");
      return null;
    }
    const fetchData = async () => {
      try {
        const date = Date.now();
        const { body, id } = updateComment;
        const response = await Axios.patch(`/comments/${id}`, { body, date });
        setNewUpdateComment(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [setNewUpdateComment, updateComment]);
  // 커멘트 딜리트 로직
  const commentDelete = useCallback(
    (key) => {
      const fetchData = async () => {
        try {
          const response = await Axios.delete(`/comments/${key}`);
          setDeleteComment(response);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    },
    [setDeleteComment]
  );
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
      updateCommentCancel={updateCommentCancel}
    />
  );
};

export default React.memo(CommentContainer);
