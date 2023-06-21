import styled from 'styled-components';
import BasicProfile from '../../assets/img/basic-profile-img.svg';
import React from 'react';
import { Link } from 'react-router-dom';

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

  p {
    color: var(--sub-font-color);
    font-size: var(--font-sm);
    margin-bottom: 8px;
  }
  p + p {
    font-size: var(--font-md);
    color: var(--font-color);
  }

  button {
    width: 56px;
    height: 28px;
    color: white;
    margin-left: 30px;
    border-radius: 28px;
    background-color: var(--main-color);
    text-align: center;
  }

  .following {
    background-color: white;
    color: var(--main-color);
  }
`;

export default function User(props) {
  const {
    username,
    accountname,
    intro,
    image,
    isfollow,
    followerCount,
    followingCount,
  } = props.user;

  return (
    <UserWrap as={Link} to='/other_profile'>
      <img src={image} alt='' />
      <div>
        <p>{username}</p>
        <p>{accountname}</p>
        <p>{intro}</p>
      </div>
      <button>{isfollow ? '언팔로우' : '팔로우'}</button>
    </UserWrap>
  );
}
