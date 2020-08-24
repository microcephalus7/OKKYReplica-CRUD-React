import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import {
  MdSearch,
  MdPermIdentity,
  MdPowerSettingsNew,
  MdFace,
} from "react-icons/md";
import { Link } from "react-router-dom";
import SideNavTile from "./SideNavTile";

const SideNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  height: 100%;
  width: 220px;
  background: ${palette.blue[0]};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    color: white;
    font-size: 2rem;
    margin: 5px auto;
    text-decoration: none;
  }
  .search {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    vertical-align: center;
    input {
      padding: 5px;
      height: 30px;
      width: 140px;
      &::placeholder {
        color: ${palette.gray[0]};
        opacity: 0.5;
      }
    }
    button {
      padding: 5px;
      height: 28px;
      width: 35px;
      background: none;
      outline: none;
      border: none;
      background: ${palette.white[0]};
      color: black;
      font-size: 1.2rem;
      cursor: pointer;
      transition: 0.1s background ease-in;
    }
  }
  .profile {
    display: flex;
    margin: 20px 0px;
    width: 100%;
    height: 35px;
    .activeProfile {
      font-size: 3rem;
      padding-left: 5px;
      display: flex;
      align-items: center;
      vertical-align: ceter;
      .profileNick {
        margin-left: 4px;
        font-size: 0.9rem;
      }
      .logOut {
        margin-left: 85px;
        font-size: 0.6rem;
      }
    }
    .profileInner {
      font-size: 0.8rem;
      width: 50%;
      border: ${palette.blue[1]} solid 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: white;
      }
    }
  }
  .cateList {
    margin-top: 120px;
    width: 100%;
    div {
      padding: 0 20px;
      height: 50px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        margin-left: 30px;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;

const SideNav = ({ categories, loading, state, authLogOut }) => {
  const { userInfo, auth } = state;
  if (loading) {
    return <SideNavWrapper>로딩 중</SideNavWrapper>;
  }
  if (!categories) {
    return null;
  }

  return (
    <SideNavWrapper>
      <Link to="/" className="logo">
        옼끼
      </Link>
      <div className="search">
        <input placeholder="Google 검색" />
        <button>
          <MdSearch />
        </button>
      </div>
      <div className="profile">
        {auth ? (
          <div className="activeProfile">
            <MdFace />
            <span className="profileNick">{userInfo.username}</span>
            <span className="logOut" onClick={() => authLogOut()}>
              로그아웃
            </span>
          </div>
        ) : (
          <>
            <div className="profileInner">
              <MdPowerSettingsNew />
              <Link to="/login">
                <span>로그인</span>
              </Link>
            </div>
            <div className="profileInner">
              <MdPermIdentity />
              <Link to="/register">
                <span>회원가입</span>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="cateList">
        {categories.map((category) => (
          <SideNavTile category={category} key={category} />
        ))}
      </div>
    </SideNavWrapper>
  );
};

export default SideNav;
