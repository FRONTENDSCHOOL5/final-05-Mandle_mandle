import React, { useState, useEffect } from 'react';

import { GoBackNav } from '../../../components/Common/TopNav';

import { FollowWrap } from './FollowListStyle';
import { useLocation } from 'react-router-dom';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import UserList from '../../../components/Common/UserList';
export default function FollowerList() {
  const location = useLocation();
  const userInfo = useRecoilValue(UserAtom);
  const isMyProfile = location.pathname === '/my_profile/follower'; // Check if it's my profile
  const userAccountname = isMyProfile ? userInfo.accountname : location.state;
  console.log(isMyProfile, userAccountname);
  const token = userInfo.token;
  const [followerData, setFollowerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userFollowerData = await FollowerData(userAccountname, token);
      setFollowerData(userFollowerData);
    };
    fetchData();
  }, [userAccountname, token]);

  if (followerData === null) {
    return null;
  }
  return (
    <FollowWrap>
      <GoBackNav />
      <h1>Followers</h1>
      <ul>
        {followerData &&
          followerData.map((user) => <UserList user={user} type='follow' />)}
      </ul>
    </FollowWrap>
  );
}

async function FollowerData(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower`;

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
