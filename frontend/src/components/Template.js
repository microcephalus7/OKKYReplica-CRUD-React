import React from "react";
import styled, { css } from "styled-components";

const TemplateWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 17px;
  position: relative;
  box-sizing: border-box;
  ul {
    list-style: none;
  }
`;
const Template = ({ children }) => {
  return <TemplateWrapper>{children}</TemplateWrapper>;
};

export default Template;
