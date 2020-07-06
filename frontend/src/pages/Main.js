import React from "react";
import styled, { css } from "styled-components";

const MainWrapper = styled.div`
  display: block;
  margin-left: 25%;
  width: 400px;
`;
const MainInner = styled.div`
  margin-left: 10%;
`;

const Main = ({ community, loading }) => {
  if (loading) {
    return <MainWrapper>로딩 중</MainWrapper>;
  }
  if (!community) {
    return null;
  }

  return (
    <MainWrapper>
      <MainInner>
        {community.map((category) => (
          <div key={category.categoryName}>{category.articles.title}</div>
        ))}
      </MainInner>
    </MainWrapper>
  );
};

export default Main;
