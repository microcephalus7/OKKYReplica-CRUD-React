import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import {
  MdSearch,
  MdList,
  MdPermIdentity,
  MdPowerSettingsNew,
} from "react-icons/md";
import { Link } from "react-router-dom";

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
      height: 29px;
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
    .profileInner {
      font-size: 0.8rem;
      width: 50%;
      border: ${palette.blue[1]} solid 1px;
      display: flex;
      justify-content: center;
      align-items: center;
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

const SideNav = ({ categories, loading }) => {
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
        <div className="profileInner">
          <MdPowerSettingsNew /> <span>로그인</span>
        </div>
        <div className="profileInner">
          <MdPermIdentity /> <span>회원가입</span>
        </div>
      </div>
      <div className="cateList">
        {categories.map((category) => (
          <div key={category}>
            <MdList />
            <span>
              <Link to={`/category/${category}`}>{category}</Link>
            </span>
          </div>
        ))}
      </div>
    </SideNavWrapper>
  );
};

export default SideNav;
