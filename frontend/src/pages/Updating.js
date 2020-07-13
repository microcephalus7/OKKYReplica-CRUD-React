import React from "react";
import styled from "styled-components";
import { MdEdit, MdChatBubble, MdFace } from "react-icons/md";

const UpdatingWrapper = styled.div`
  display: block;
  margin: 30px 20px;
  width: 700px;
  height: auto;
  font-size: 1.3rem;
  font-weight: 500;
  .updatingInner {
    margin-top: 20px;
    background: #ffffff;
    height: auto;
    border: #dddddd solid 0.3px;
    .UpdatingProfile {
      display: flex;
      padding: 10px 10px;
      align-items: center;
      vertical-align: middle;
      border-bottom: #dddddd solid 0.3px;
      svg {
        color: #0059ab;
        font-size: 3rem;
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
    }
    .updatingTextfield {
      padding: 30px 50px;
      display: flex;
      flex-direction: column;
      select {
        border: #dddddd solid 0.3px;
        height: 30px;
        margin-bottom: 10px;
      }

      input {
        border: #dddddd solid 0.3px;
        padding: 5px 10px;
        height: 40px;
        margin-bottom: 10px;
        &::placeholder {
          color: gray;
          opacity: 0.5;
        }
      }
      textarea {
        border: #dddddd solid 0.3px;
        padding: 5px 10px;
        height: 450px;
        padding: 10px 10px;
      }
      .updatingButtons {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        button {
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 38px;
          border-radius: 5px;
          color: black;
          font-size: 0.95rem;
          background: white;
          border: #dddddd solid 1px;
        }
        .submit {
          color: white;
          background: #5cb85c;
        }
      }
    }
  }
`;
const Updating = () => {
  return (
    <UpdatingWrapper>
      <div className="updatingInner">
        <div className="UpdatingProfile">
          <MdFace />
          <div className="profileDetail">
            <span className="profileId">호우</span>
            <span className="date">2020/07/10</span>
          </div>
        </div>
        <div className="updatingTextfield">
          <select>
            <option>자유</option>
            <option>QnA</option>
            <option>Tech</option>
            <option>Jobs</option>
          </select>
          <input placeholder="제목을 입력해 주세요" value="제목" />
          <textarea value="내용" />
          <div className="updatingButtons">
            <button className="cancel">취소</button>
            <button className="submit">update</button>
          </div>
        </div>
      </div>
    </UpdatingWrapper>
  );
};

export default Updating;
