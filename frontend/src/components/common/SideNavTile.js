import React from "react";
import styled from "styled-components";
import { MdList } from "react-icons/md";
import { Link } from "react-router-dom";
const SideNavTileWrapper = styled.div`
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
const SideNavTile = ({ category }) => {
  return (
    <SideNavTileWrapper>
      <div key={category}>
        <MdList />
        <span>
          <Link to={`/category/${category}`}>{category}</Link>
        </span>
      </div>
    </SideNavTileWrapper>
  );
};

export default React.memo(SideNavTile);
