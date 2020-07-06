import React, { useState, useEffect } from "react";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Updating from "../pages/Updating";
import Writing from "../pages/Writing";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SideNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  height: 100%;
  width: 25%;
  background: rgb(0, 89, 171);
  color: white;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  align-items: center;
  ul {
    padding: 0;
    margin: 0;
  }
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
const Category = styled(NavLink)`
  li {
    color: white;
  }
`;
const SideNav = ({ community, loading }) => {
  if (loading) {
    return <SideNavWrapper>로딩 중</SideNavWrapper>;
  }
  if (!community) {
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
      <ul>
        {community.map((category) => (
          <li key={category.categoryName}>{category.categoryName}</li>
        ))}
      </ul>
    </SideNavWrapper>
  );
};

export default SideNav;
