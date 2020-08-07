import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BoardWrapper = styled.div``;
const Board = ({ articles, loading }) => {
  if (!articles) {
    return null;
  }
  return (
    <BoardWrapper>
      {articles.map((article) => (
        <li key={article.id}>
          <span className="boardTitle">
            <Link to={`/detail/${article.id}`}>{article.title}</Link>
          </span>
          <span className="boardWriter">{article.username}</span>
        </li>
      ))}
    </BoardWrapper>
  );
};

export default Board;
