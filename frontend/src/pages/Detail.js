import React from "react";
import styled from "styled-components";
import { MdEdit, MdChatBubble, MdFace } from "react-icons/md";

const DetailWrapper = styled.div`
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
  .boardDetail {
    background: #ffffff;
    height: auto;
    border: #dddddd solid 0.3px;
    .boardProfile {
      display: flex;
      padding: 10px 10px;
      align-items: center;
      vertical-align: middle;
      svg {
        color: #0059ab;
        font-size: 3rem;
      }
    }
    .profileDetail {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      flex: 1;
      .profileId {
        color: #0059ab;
        font-size: 0.9rem;
      }
      .date {
        color: #e2d5cc;
        font-size: 0.75rem;
      }
    }
    .boardInfo {
      vertical-align: middle;
      display: flex;
      color: black;
      svg {
        color: black;
        font-size: 1rem;
      }
      span {
        color: black;
        margin-left: 8px;
        margin-right: 10px;
        font-size: 0.8rem;
      }
    }
    .boardInner {
      border: #dddddd solid 0.3px;
      display: flex;
      .boardLeft {
        margin: 0 10px;
        width: 620px;
        .boardTitle {
          height: 80px;
          display: flex;
          align-items: center;
          border-bottom: #dddddd solid 0.3px;
          font-size: 1.3rem;
          font-weight: 400;
        }
        .boardSubscribe {
          margin-top: 40px;
          margin-bottom: 40px;
        }
      }
      .boardRight {
        width: 80px;
        border-left: #dddddd solid 0.3px;
      }
    }
  }
  .boardComment {
    margin-top: 20px;
    border: #dddddd solid 0.5px;
    .commentCount {
      height: 40px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      border-bottom: #dddddd solid 0.3px;
      background: #f2f2f2;
    }
    .commentWriting {
      height: 120px;
      display: flex;
      background: #ffffff;
      .comment {
        width: 620px;
        display: flex;
        flex-direction: column;
        .commentProfile {
          padding-left: 8px;
          padding-top: 5px;
          display: flex;
          align-items: center;
          vertical-align: middle;
          height: 50px;
          svg {
            font-size: 3rem;
          }
          .profileInfo {
            display: flex;
            align-items: center;
            .profileNick {
              font-size: 0.9rem;
            }
          }
        }
        .commentInput {
          display: flex;
          height: 70px;
          align-items: flex-end;

          textarea {
            padding: 5px;
            margin-left: 4px;
            margin-bottom: 5px;
            height: 50px;
            width: 98%;
            border: #dddddd solid 1.5px;
            &::placeholder {
              color: gray;
              opacity: 0.5;
            }
          }
        }
      }

      .commentSubmit {
        background: #ffffff;
        width: 80px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 7px;
        border-left: #dddddd solid 0.3px;
        .submit {
          width: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 35px;
          border-radius: 5px;
          color: white;
          font-size: 0.95rem;
          background: #5cb85c;
        }
      }
    }
  }
`;
const Detail = () => {
  return (
    <DetailWrapper>
      <div className="boardNavigation">
        <span className="boardTitle">Free</span>
        <div className="boardWriting">
          <MdEdit />
          <span>New Article</span>
        </div>
      </div>
      <div className="boardDetail">
        <div className="boardProfile">
          <MdFace />
          <div className="profileDetail">
            <span className="profileId">호우</span>
            <span className="date">2020/07/10</span>
          </div>
          <div className="boardInfo">
            <MdChatBubble /> <span>0</span>
          </div>
        </div>
        <div className="boardInner">
          <div className="boardLeft">
            <div className="boardTitle">제목</div>
            <div className="boardSubscribe">내용임 ㅎㅎ</div>
          </div>
          <div className="boardRight"></div>
        </div>
      </div>
      <div className="boardComment">
        <div className="commentCount">댓글 0</div>
        <div className="commentWriting">
          <div className="comment">
            <div className="commentProfile">
              <MdFace />
              <span className="profileNick">호우</span>
            </div>
            <div className="commentInput">
              <textarea placeholder="댓글 쓰기" />
            </div>
          </div>
          <div className="commentSubmit">
            <div className="submit">등록</div>
          </div>
        </div>
      </div>
    </DetailWrapper>
  );
};

export default Detail;
