import React from "react";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Updating from "../pages/Updating";
import Writing from "../pages/Writing";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const SideNavWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background: rgb(0, 89, 171);
  color: white;
  ul {
    padding: 0;
    margin: 0;
    li {
      color: white;
    }
  }
`;
const Logo = styled.a`
  font-size: 2rem;
  margin: 0 auto;
`;

const Search = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  input {
    padding: 5px;
    height: 25px;
    width: 70%;
  }
  button {
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
const SideNav = () => {
  return (
    <SideNavWrapper>
      <Logo>옼끼</Logo>
      <Search>
        <input placeholder="Google 검색" />
        <button>
          <MdSearch />
        </button>
      </Search>
      <ul>
        <li>자유게시판</li>
        <li>Q&A</li>
        <li>칼럼</li>
      </ul>
    </SideNavWrapper>
  );
};

export default SideNav;
