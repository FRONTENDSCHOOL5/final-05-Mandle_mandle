import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import User from '../../components/Common/User';
import {} from './FollowListStyle';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { followingList } from '../../api/FollowingList';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

const UserList = styled.ul``;

export default function FollowingList() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const userInfo = useRecoilValue(UserAtom);
  const userAccountname = userInfo.accountname;
  const token = userInfo.token;
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

  console.log(followingData);
  return (
    <div>
      <button onClick={goBack}>
        <img src={ArrowIcon} alt='' />
      </button>
      <h1>Followings</h1>
      <UserList>
        {followingData &&
          followingData.map((user) => <User key={user._id} user={user} />)}
      </UserList>
    </div>
  );
}

async function FollowingData(accountname, token) {
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
