import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdChatBubble, MdFace } from "react-icons/md";
const BoardItemWrapper = styled.div``;
const BoardItem = ({ article }) => {
  return (
    <BoardItemWrapper>
      <div className="boardItem" key={article.id}>
        <span className="itemTitle">
          <Link to={`/detail/${article.id}`}>{article.title}</Link>
        </span>
        <div className="itemOverview">
          <div className="overviewItem">
            <MdChatBubble />
            <span>{article.comment ? article.comment.length : 0}</span>
          </div>
        </div>
        <div className="itemProfile">
          <MdFace />
          <span className="profileId">{article.username}</span>
        </div>
      </div>
    </BoardItemWrapper>
  );
};

export default BoardItem;
