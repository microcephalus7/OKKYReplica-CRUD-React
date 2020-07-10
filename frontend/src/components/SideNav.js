import React from "react";

import styled from "styled-components";

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
  background: rgb(0, 89, 171);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2rem;
  margin: 5px auto;
`;

const Search = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  input {
    padding: 5px;
    height: 30px;
    width: 140px;
    &::placeholder {
      color: gray;
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
    background: white;
    color: black;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.1s background ease-in;
  }
`;
const ProfileWrapper = styled.div`
  display: flex;
  margin: 20px 0px;
  width: 100%;
  height: 35px;
`;
const ProfileInner = styled.div`
  font-size: 0.8rem;
  width: 50%;
  border: #00519c solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CateList = styled.div`
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
      <Logo>옼끼</Logo>
      <Search>
        <input placeholder="Google 검색" />
        <button>
          <MdSearch />
        </button>
      </Search>
      <ProfileWrapper>
        <ProfileInner>
          <MdPowerSettingsNew /> <span>로그인</span>
        </ProfileInner>
        <ProfileInner>
          <MdPermIdentity /> <span>회원가입</span>
        </ProfileInner>
      </ProfileWrapper>
      <CateList>
        {categories.map((category) => (
          <div key={category}>
            <MdList />
            <span>
              <Link>{category}</Link>
            </span>
          </div>
        ))}
      </CateList>
    </SideNavWrapper>
  );
};

export default SideNav;
