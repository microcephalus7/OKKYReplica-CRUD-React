import React from "react";
import styled from "styled-components";
import { MdEdit, MdChatBubble, MdFace } from "react-icons/md";
const BoardWrapper = styled.div`
  margin: 30px 20px;
  width: 700px;
  height: auto;
  .boardNavigation {
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    .boardWriting {
      width: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      border-radius: 5px;
      color: white;
      font-size: 0.95rem;
      background: #5cb85c;
      span {
        margin-left: 5px;
      }
    }
  }
  .boardList {
    background: #ffffff;
    border-collapse: collapse;
    width: 700px;
    height: 100px;
    border: #dddddd solid 0.3px;
    .boardItem {
      width: 100%;
      height: 50px;
      border: #dddddd solid 0.3px;
      border-collapse: collapse;
      border-left: #dddddd solid 3.2px;
      display: flex;
      align-items: center;
    }
    .active {
      border-left: #3a93de solid 3.2px;
    }
    .itemTitle {
      font-size: 0.9em;
      font-weight: 200;

      width: 400px;
    }
    .itemOverview {
      display: flex;
      justify-content: center;
      width: 100px;
      .overviewItem {
        color: #dddddd;
        svg {
          vertical-align: middle;
          font-size: 1rem;
        }
        span {
          line-height: 100px;
          margin-left: 5px;
          font-size: 0.8rem;
        }
      }
    }
    .itemProfile {
      svg {
        vertical-align: middle;
        font-size: 2rem;
        color: #32527c;
      }
      span {
        margin-left: 5px;
        color: #32527c;
        font-size: 0.7rem;
      }
    }
  }
`;
const Board = () => {
  return (
    <BoardWrapper>
      <div className="boardNavigation">
        <span className="boardTitle">Free</span>
        <div className="boardWriting">
          <MdEdit />
          <span>New Article</span>
        </div>
      </div>
      <div className="boardList">
        <div className="boardItem active">
          <span className="itemTitle">글 제목</span>
          <div className="itemOverview">
            <div className="overviewItem">
              <MdChatBubble />
              <span>10</span>
            </div>
          </div>
          <div className="itemProfile">
            <MdFace />
            <span className="profileId">호우</span>
          </div>
        </div>
        <div className="boardItem"></div>
      </div>
    </BoardWrapper>
  );
};

export default Board;
