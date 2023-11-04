import React from 'react';
import styled from 'styled-components';

import PostFollow from '../../api/PostFollow';
import DeleteFollow from '../../api/DeleteFollow';

export default function FollowButtton({
  onClick,
  isfollow,
  SetFollow,
  accountname,
  token,
}) {
  const handleFollowClick = async () => {
    try {
      if (isfollow) {
        const response = await DeleteFollow(accountname, token);
        if (response) {
          SetFollow(false);
        } else {
        }
      } else {
        const response = await PostFollow(accountname, token);
        if (response) {
          SetFollow(true);
        } else {
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FollowBtn
      className={isfollow ? 'following' : ''}
      onClick={handleFollowClick}
    >
      {isfollow ? '취소' : '팔로우'}
    </FollowBtn>
  );
}
const FollowBtn = styled.button`
  width: 100px;
  height: 28px;
  color: white;
  margin-left: 30px;
  border-radius: 28px;
  background-color: var(--main-color);
  text-align: center;

  &.following {
    background-color: white;
    color: var(--sub-font-color);
    border: 1px solid var(--sub-font-color);
  }
`;
