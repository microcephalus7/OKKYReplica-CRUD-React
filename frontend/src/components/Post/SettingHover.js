import React from "react";
import styled from "styled-components";

const SettingHoverWrapper = styled.div`
  background: black;
  color: white;
  font-size: 0.6rem;
  z-index: 3;
`;
const SettingHover = () => {
  return <SettingHoverWrapper>게시물 설정</SettingHoverWrapper>;
};

export default React.memo(SettingHover);
