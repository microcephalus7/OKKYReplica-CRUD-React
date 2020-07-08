import React from "react";
import styled from "styled-components";
import { MdFlag } from "react-icons/md";

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
        <MainBoardOuter>
          <MainBoardTitle>
            <MdFlag className="icon" />
            <span>자유게시판</span>
          </MainBoardTitle>
          <MainBoardInner>
            <li>
              <span className="boardTitle">자유 제목 1</span>
              <span className="boardWriter">호우</span>
            </li>
            <li>
              <span className="boardTitle">자유 제목 1</span>
              <span className="boardWriter">호우</span>
            </li>
          </MainBoardInner>
        </MainBoardOuter>
        <MainBoardOuter>
          <MainBoardTitle>
            <MdFlag className="icon" /> <span>자유게시판</span>
          </MainBoardTitle>
          <MainBoardInner>
            <li>
              <span className="boardTitle">자유 제목 1</span>
              <span className="boardWriter">호우</span>
            </li>
            <li>
              <span className="boardTitle">자유 제목 1</span>
              <span className="boardWriter">호우</span>
            </li>
          </MainBoardInner>
        </MainBoardOuter>
      </MainInner>
    </MainWrapper>
  );
};

export default Main;
