import React from "react";
import styled from "styled-components";
import { MdFace } from "react-icons/md";

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: 50px;
  svg {
    font-size: 3rem;
  }
  .profileInfo {
    display: flex;
    align-items: center;
    .profileNick {
      font-size: 0.9rem;
    }
  }
`;
const Profile = ({ username }) => {
  return (
    <ProfileWrapper>
      <MdFace />
      <span className="profileNick">{username}</span>
    </ProfileWrapper>
  );
};

export default Profile;
