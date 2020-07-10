import React from "react";
import styled from "styled-components";
import { MdFlag } from "react-icons/md";
import { Link } from "react-router-dom";

const MainWrapper = styled.div`
  display: block;
  margin-left: 220px;
  width: 400px;
`;
const MainInner = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  display: grid;
  grid-template-columns: auto auto;
`;
const MainBoardOuter = styled.div`
  width: 350px;
  height: auto;
  margin: 20px 10px;
  color: #2a6496;
`;
const MainBoardTitle = styled.div`
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
const MainBoardInner = styled.ul`
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
    .boardTitle {
      flex: 1;
    }
  }
`;

const Main = ({ articles, loading, categories }) => {
  if (loading) {
    return <MainWrapper>로딩 중</MainWrapper>;
  }
  if (!articles) {
    return null;
  }

  return (
    <MainWrapper>
      <MainInner>
        {categories.map((category) => (
          <MainBoardOuter>
            <MainBoardTitle>
              <MdFlag className="icon" />
              <span>
                <Link>{category}</Link>
              </span>
            </MainBoardTitle>
            <MainBoardInner>
              {articles.map((article) =>
                article.category === category ? (
                  <li>
                    <span className="boardTitle">{article.title}</span>
                    <span className="boardWriter">{article.id}</span>
                  </li>
                ) : null
              )}
            </MainBoardInner>
          </MainBoardOuter>
        ))}
      </MainInner>
    </MainWrapper>
  );
};

export default Main;
