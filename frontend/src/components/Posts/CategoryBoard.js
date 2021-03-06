import React from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import BoardItem from "./BoardItem";
const BoardWrapper = styled.div`
  display: block;
  margin: 30px 20px;
  width: 700px;
  margin-left: 240px;
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
        a {
          color: white;
        }
      }
    }
  }
  .boardList {
    background: #ffffff;
    border-collapse: collapse;
    width: 700px;
    height: auto;
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
      a {
        color: #32527c;
      }
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
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    .page {
      background: #ffffff;
      color: #3a93de;
      border: #dddddd solid 0.1px;
      border-collapse: collapse;
      font-size: 0.8rem;
      min-width: 25px;
      height: 25px;
      display: flex;
      vertical-align: middle;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      color: #337ab7;
      cursor: pointer;
    }
    .active {
      color: white;
      background: #337ab7;
    }
  }
`;
const CategoryBoard = ({
  category,
  articles,
  loading,
  setPage,
  nextPage,
  prevPage,
  pageSet,
  page,
}) => {
  if (loading) {
    return <BoardWrapper>로딩중</BoardWrapper>;
  }
  if (!articles) {
    return null;
  }
  if (!pageSet) {
    return <BoardWrapper>로딩중</BoardWrapper>;
  }
  return (
    <BoardWrapper>
      <div className="boardNavigation">
        <span className="boardTitle">{category}</span>
        <div className="boardWriting">
          <MdEdit />
          <span>
            <Link to={`/writing/${category}`}>New Article</Link>
          </span>
        </div>
      </div>
      <div className="boardList">
        {articles.map((article) => (
          <BoardItem article={article} />
        ))}
      </div>
      <div className="pagination">
        <div onClick={prevPage}>«</div>
        {pageSet.map((pa) => (
          <div
            onClick={() => {
              setPage(pa);
            }}
            className={page === pa ? "page active" : "page"}
          >
            {pa}
          </div>
        ))}
        <div onClick={nextPage}>»</div>
      </div>
    </BoardWrapper>
  );
};

export default React.memo(CategoryBoard);
