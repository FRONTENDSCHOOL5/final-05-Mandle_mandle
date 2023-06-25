import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import { GoBackNav } from '../../components/Common/TopNav';
import User from '../../components/Common/User';
import { FollowWrap } from './FollowListStyle';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GetFollowingList } from '../../api/GetFollowingList';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

export default function FollowingList() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const userInfo = useRecoilValue(UserAtom);
  const userAccountname = userInfo.accountname;
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
      <h1>Followers</h1>
      <ul>
        {followingData &&
          followingData.map((user) => <User key={user._id} user={user} />)}
      </ul>
    </FollowWrap>
  );
}

async function FollowingData(accountname, token, followingCount) {
  const url = `https://mandarin.api.weniv.co.kr/profile/${accountname}/following`;

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
