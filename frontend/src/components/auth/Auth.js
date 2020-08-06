import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
  display: block;
  margin: 30px 20px;
  margin-left: 240px;
  width: 400px;
  height: auto;
  font-size: 1.3rem;
  font-weight: 500;
  .authInner {
    margin-top: 20px;
    background: white;
    height: auto;
    border: #dddddd solid 0.3px;
    .innerTitle {
      border-bottom: #dddddd solid 0.2px;
      height: 60px;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .innerAuth {
      padding: 30px 50px;
      display: flex;
      flex-direction: column;

      input {
        width: inherit;
        border: #dddddd solid 0.2px;
        height: 35px;
        border-collapse: collapse;
        display: block;
        padding: 5px 10px;
      }
      .submit {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #337ab7;
        border-radius: 4px;
        color: white;
        height: 35px;
        width: 300px;
        font-size: 0.8rem;
        margin-top: 10px;
        cursor: pointer;
      }
      .help {
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 0.8rem;
        color: #2a6496;
        a {
          color: #2a6496;
        }
      }
    }
  }
`;

const Auth = ({
  login,
  handleSubmit,
  id,
  password,
  passwordRepeat,
  handleChange,
  nickname,
}) => {
  return (
    <LoginWrapper>
      {login ? "로그인" : "회원가입"}
      <div className="authInner">
        <div className="innerTitle">{login ? "로그인" : "회원가입"}</div>
        <form className="innerAuth">
          <input
            placeholder="아이디"
            name="id"
            value={id}
            onChange={handleChange}
          />
          <input
            placeholder="비밀번호"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {login ? null : (
            <>
              <input
                placeholder="비밀번호 확인"
                type="password"
                name="passwordRepeat"
                value={passwordRepeat}
                onChange={handleChange}
              />
              <input
                placeholder="닉네임"
                name="nickname"
                value={nickname}
                onChange={handleChange}
              />
            </>
          )}
          <div className="submit" onClick={handleSubmit}>
            {login ? "로그인" : "회원가입"}
          </div>
          {login ? (
            <div className="help">
              <Link to="/register">회원가입</Link>
            </div>
          ) : null}
        </form>
      </div>
    </LoginWrapper>
  );
};

export default Auth;
