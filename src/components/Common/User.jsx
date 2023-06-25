import styled from 'styled-components';
import BasicProfile from '../../assets/img/basic-profile-img.svg';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const UserWrap = styled.a`
  display: block;
  width: 358px;
  height: 50px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  margin: 10px;
  align-items: center;
  gap: 14px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50px;
  }
  #textWrap {
    flex-direction: column;
  }
  p {
    color: var(--sub-font-color);
    font-size: var(--font-sm);
    margin-bottom: 8px;
  }
  p + p {
    font-size: var(--font-md);
    color: var(--font-color);
  }
`;

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

export default function User(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    username,
    accountname,
    intro,
    image,
    isfollow,
    followerCount,
    followingCount,
  } = props.user;
  function handleClick(accountname) {
    navigate(`/other_profile/${accountname}`, {
      state: {
        accountname: accountname,
      },
    });
  }
  return (
    <div id='userDiv'>
      <UserWrap onClick={() => handleClick(accountname)}>
        <img src={image} alt='' />
        <div id='textWrap'>
          <p>{username}</p>
          <p>{intro}</p>
        </div>
      </UserWrap>
      <FollowBtn className={isfollow ? 'following' : ''}>
        {isfollow ? '취소' : '팔로우'}
      </FollowBtn>
    </div>
  );
}
