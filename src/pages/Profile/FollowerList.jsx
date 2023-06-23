import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import User from '../../components/Common/User';
import {} from './FollowListStyle';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { followingList } from '../../api/FollowingList';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

const UserList = styled.ul``;

export default function FollowerList() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const { accountname } = useParams();
  const userInfo = useRecoilValue(UserAtom);
  const isMyProfile = location.pathname === '/my_profile/follower'; // Check if it's my profile
  const userAccountname = isMyProfile ? userInfo.accountname : location.state;
  // const userAccountname = userInfo.accountname;
  const token = userInfo.token;
  // const followerCount = userInfo.followerCount;
  const [followerData, setFollowerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userFollowerData = await FollowerData(userAccountname, token);
      setFollowerData(userFollowerData);
    };
    fetchData();
  }, [userAccountname, token]);
  const fetchDataFromAPI = async (apiFunction, ...params) => {
    try {
      const data = await apiFunction(...params);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  console.log(isMyProfile);
  if (followerData === null) {
    return null; // Rendering is still waiting
  }
  return (
    <div>
      <button onClick={goBack}>
        <img src={ArrowIcon} alt='' />
      </button>
      <h1>Followers</h1>
      <UserList>
        {followerData &&
          followerData.map((user) => (
            <User key={user._id} user={user} accountname={user.accountname} />
          ))}
      </UserList>
    </div>
  );
}

async function FollowerData(accountname, token, followerCount) {
  const url = `https://mandarin.api.weniv.co.kr/profile/${accountname}/follower`;

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
