import React from "react";
import styled from "styled-components";
import Profile from "../common/Profile";

const CommentWrapper = styled.div`
  .comment {
    min-height: 180px;
    display: flex;
    background: #ffffff;
    border-bottom: #dddddd solid 0.3px;
    .commentBody {
      width: 620px;
      display: flex;
      flex-direction: column;
      .body {
        margin-top: 10px;
      }
    }
    .commentUpdate {
      width: 110px;
      border-left: #dddddd solid 0.3px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      div {
        cursor: pointer;
        margin-bottom: 5px;
      }
    }
  }
`;
const Comment = ({
  setUpdateInput,
  com,
  state,
  updateInput,
  updateComment,
  updateCommentChange,
  updateCommentSubmit,
  updateCommentSettting,
  updateCommentCancel,
  commentDelete,
}) => {
  const { userInfo } = state;
  if (!com) {
    return null;
  }
  return (
    <CommentWrapper>
      <div className="comment" key={com.id}>
        <div className="commentBody">
          <Profile username={com.username} />
          {updateInput ? (
            <textarea
              value={updateComment.body}
              placeholder="댓글 업데이트"
              onChange={updateCommentChange}
            />
          ) : (
            <div className="body">{com.body}</div>
          )}
        </div>
        {userInfo.username === com.username ? (
          updateInput ? (
            <div className="commentUpdate">
              <div onClick={updateCommentSubmit}>수정 완료</div>
              <div onClick={updateCommentCancel}>수정 취소</div>
            </div>
          ) : (
            <div className="commentUpdate">
              <div
                onClick={() => {
                  updateCommentSettting(com.id);
                }}
              >
                댓글 수정
              </div>
              <div onClick={() => commentDelete(com.id)}>댓글 삭제</div>
            </div>
          )
        ) : (
          <div className="commentUpdate"></div>
        )}
      </div>
    </CommentWrapper>
  );
};

export default Comment;
