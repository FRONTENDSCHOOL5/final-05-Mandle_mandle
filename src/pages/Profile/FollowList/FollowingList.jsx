import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../../styles/GlobalStyles';
import { GoBackNav } from '../../../components/Common/TopNav';
import { FollowWrap } from './FollowListStyle';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GetFollowingList } from '../../../api/GetFollowingList';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import UserList from '../../../components/Common/UserList';
import axios from 'axios';
export default function FollowingList() {
  const location = useLocation();
  const userInfo = useRecoilValue(UserAtom);
  const isMyProfile = location.pathname === '/my_profile/following'; // Check if it's my profile
  const userAccountname = isMyProfile ? userInfo.accountname : location.state;
  const token = userInfo.token;
  // const followingCount = userInfo.followerCount;

  const [followingData, setFollowingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userFollowingData = await FollowingData(userAccountname, token);
      setFollowingData(userFollowingData);
    };
    fetchData();
  }, [userAccountname, token]);

  if (followingData === null) {
    return null; // Rendering is still waiting
  }
  return (
    <FollowWrap>
      <GoBackNav />
      <h1>Followings</h1>
      <ul>
        {followingData &&
          followingData.map((user) => <UserList user={user} type='follow' />)}
      </ul>
    </FollowWrap>
  );
}

async function FollowingData(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/following`;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
