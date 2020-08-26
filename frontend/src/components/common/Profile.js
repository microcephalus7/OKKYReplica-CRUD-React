import React from "react";
import styled, { css } from "styled-components";
import { MdFace } from "react-icons/md";

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: 50px;
  ${(props) =>
    props.detail &&
    css`
      flex: 1;
    `}
  svg {
    font-size: 3rem;
  }
  .info {
    display: flex;
    flex-direction: column;

    .profileNick {
      font-size: 0.9rem;
    }
    .date {
      color: #e2d5cc;
      font-size: 0.75rem;
    }
  }
`;
const Profile = ({ username, date, detail }) => {
  return (
    <ProfileWrapper detail={detail}>
      <MdFace />
      <div className="info">
        <span className="profileNick">{username}</span>
        <span className="date">
          {date ? new Date(date).toLocaleDateString() : "날짜 데이터 없음"}
        </span>
      </div>
    </ProfileWrapper>
  );
};

export default React.memo(Profile);
