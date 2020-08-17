import React from "react";
import styled from "styled-components";
import { MdEdit, MdChatBubble, MdFace, MdSettings } from "react-icons/md";
import Profile from "../common/Profile";
import { Link } from "react-router-dom";

const DetailWrapper = styled.div`
  display: block;
  margin: 30px 20px;
  margin-left: 240px;
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
        a {
          color: white;
        }
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
          min-height: 160px;
        }
      }
      .boardOption {
        width: 110px;
        border-left: #dddddd solid 0.3px;
        color: #999999;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        z-index: 0;
        .optionWrapper {
          .option {
            position: relative;
            z-index: 3;
            display: flex;
            .optionBox {
              font-size: 0.7rem;
              color: white;
              background: black;
              height: 23px;
              width: 80px;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              right: 30px;
            }
            svg {
              position: relative;
              z-index: 1;
              margin-bottom: 10px;
              font-size: 1.4rem;
            }
          }
        }
        .optionHandle {
          div {
            cursor: pointer;
            font-size: 1rem;
            margin: 10px 0;
          }
        }
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
    .commentList {
      padding-top: 8px;
      padding-left: 12px;
      background: #ffffff;
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
    }
    .commentWriting {
      height: 120px;
      display: flex;
      background: #ffffff;
      .WritingWrapper {
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
        width: 110px;
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
const Detail = ({
  article,
  loading,
  visible,
  setVisible,
  articleDelete,
  articleUpdate,
  articleChange,
  comments,
  body,
  commentSubmit,
  state,
  updateInput,
  updateComment,
  newCommentSet,
}) => {
  const { auth, userInfo } = state;
  if (loading) {
    return <DetailWrapper>로딩중</DetailWrapper>;
  }
  if (!article) {
    return null;
  }
  return (
    <DetailWrapper>
      <div className="boardNavigation">
        <span className="boardTitle">
          <Link to={`/category/${article.category}`}>{article.category}</Link>
        </span>
        <div className="boardWriting">
          <MdEdit />
          <span>
            <Link to={`/writing/${article.category}`}>New Article</Link>
          </span>
        </div>
      </div>
      <div className="boardDetail">
        <div className="boardProfile">
          <MdFace />
          <div className="profileDetail">
            <span className="profileId">{article.username}</span>
            <span className="date">2020/07/10</span>
          </div>
          <div className="boardInfo">
            <MdChatBubble />
            <span>{!comments ? 0 : comments.length}</span>
          </div>
        </div>
        <div className="boardInner">
          <div className="boardLeft">
            <div className="boardTitle">{article.title}</div>
            <div className="boardSubscribe">{article.body}</div>
          </div>
          <div className="boardOption">
            {article.username === userInfo.username ? (
              <>
                <div className="optionWrapper">
                  <div className="option">
                    {visible ? (
                      <div className="optionBox">게시물 설정</div>
                    ) : null}
                    <MdSettings
                      onMouseOver={() => setVisible(true)}
                      onMouseOut={() => setVisible(false)}
                    />
                  </div>
                </div>
                <div className="optionHandle">
                  <div onClick={articleDelete}>글 삭제</div>
                  <div onClick={articleUpdate}>글 수정</div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="boardComment">
        <div className="commentCount">
          댓글 {!comments ? 0 : comments.length}
        </div>
        <div className="commentList">
          {!comments ? (
            <div className="comment"> 댓글이 없습니다.</div>
          ) : (
            comments.map((com) => (
              <div className="comment" key={com.id}>
                <div className="commentBody">
                  <Profile username={com.username} />
                  {updateInput ? (
                    <textarea
                      placeholder="댓글 쓰기"
                      value={updateComment.body}
                      onChange={articleChange}
                    />
                  ) : (
                    <div className="body">{com.body}</div>
                  )}
                </div>
                {userInfo.username === com.username ? (
                  <div className="commentUpdate">
                    <div onClick={newCommentSet(com.id)}>글 수정</div>
                    <div>글 삭제</div>
                  </div>
                ) : (
                  <div className="commentUpdate"></div>
                )}
              </div>
            ))
          )}
        </div>
        <div className="commentWriting">
          {auth ? (
            <>
              <div className="WritingWrapper">
                <div className="commentProfile">
                  <MdFace />
                  <span className="profileNick">{userInfo.username}</span>
                </div>
                <div className="commentInput">
                  <textarea
                    placeholder="댓글 쓰기"
                    value={body}
                    onChange={articleChange}
                  />
                </div>
              </div>
              <div className="commentSubmit">
                <button className="submit" onClick={commentSubmit}>
                  등록
                </button>
              </div>
            </>
          ) : (
            "로그인을 해야 글쓰기가 가능합니다"
          )}
        </div>
      </div>
    </DetailWrapper>
  );
};

export default Detail;
