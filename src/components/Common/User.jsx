import styled from 'styled-components';
import BasicProfile from '../../assets/img/basic-profile-img.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
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

export default function User({ user }) {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  const { username, accountname, intro, image } = user.user;
  console.log(image);
  function handleClick(accountname) {
    navigate(`/other_profile/${accountname}`, {
      state: {
        accountname: accountname,
      },
    });
  }
  const [isfollow, SetFollow] = useState(user.isfollow);
  const handleFollowClick = async () => {
    try {
      if (isfollow) {
        const response = await unfollow(accountname, token);
        if (response) {
          SetFollow(false);
        } else {
        }
      } else {
        const response = await userfollow(accountname, token);
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
    <div id='userDiv'>
      <UserWrap onClick={() => handleClick(accountname)}>
        <img src={image} alt='사용자 프로필 이미지' />
        <div id='textWrap'>
          <p>{username}</p>
          <p>{intro}</p>
        </div>
      </UserWrap>
      <FollowBtn
        className={isfollow ? 'following' : ''}
        onClick={handleFollowClick}
      >
        {isfollow ? '취소' : '팔로우'}
      </FollowBtn>
    </div>
  );
}
async function userfollow(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follow`;

  try {
    const res = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return res.data; // Modify this based on the actual response structure
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function unfollow(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/unfollow`;

  try {
    const res = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data; // Modify this based on the actual response structure
  } catch (err) {
    console.log(err);
    return null;
  }
}
