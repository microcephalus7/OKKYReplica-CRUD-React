import React from "react";
import styled from "styled-components";
import { MdFlag } from "react-icons/md";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";
import BoardContainer from "../../container/main/BoardContainer";

const BoardWrapper = styled.div`
  display: block;
  margin-left: 220px;
  width: 400px;
`;
const BoardLayer = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  display: grid;
  grid-template-columns: auto auto;
`;
const BoardOuter = styled.div`
  width: 350px;
  height: auto;
  margin: 20px 10px;
  color: ${palette.gray[0]};
`;
const BoardTitle = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  span {
    font-size: 0.8rem;
    text-decoration: none;
    a {
      color: #2a6496;
      text-decoration: none;
    }
  }
`;
const BoardInner = styled.ul`
  margin-top: 10px;
  border: #dddddd solid 0.2px;
  border-collapse: collapse;
  background: #ffffff;
  li {
    display: flex;
    align-items: center;
    padding: 4px 0;
    height: 30px;
    font-size: 0.8rem;
    border-collapse: collapse;
    border-top: #dddddd solid 0.2px;
    border-left: #2a6496 solid 2px;
    padding: 0 10px;
    color: #2a6496;
    a {
      color: #2a6496;
    }
    .boardTitle {
      flex: 1;
    }
  }
`;

const Board = ({ articles, loading, categories }) => {
  if (loading) {
    return <BoardWrapper>로딩 중</BoardWrapper>;
  }
  if (!articles) {
    return null;
  }
  return (
    <BoardWrapper>
      <BoardLayer>
        {categories.map((category) => (
          <BoardOuter>
            <BoardTitle>
              <MdFlag className="icon" />
              <span>
                <Link to={`/category/${category}`}>{category}</Link>
              </span>
            </BoardTitle>
            <BoardInner>
              <BoardContainer category={category} />
            </BoardInner>
          </BoardOuter>
        ))}
      </BoardLayer>
    </BoardWrapper>
  );
};

export default React.memo(Board);
