import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: block;
  margin-left: 25%;
  width: 400px;
`;
const MainInner = styled.div`
  margin-left: 10%;
`;

const Main = ({ articles, loading, categories }) => {
  if (loading) {
    return <MainWrapper>로딩 중</MainWrapper>;
  }
  if (!articles) {
    return null;
  }

  return (
    <MainWrapper>
      <MainInner>
        {articles.map((article) => (
          <div key={article.no}>{article.title}</div>
        ))}
      </MainInner>
    </MainWrapper>
  );
};

export default Main;
