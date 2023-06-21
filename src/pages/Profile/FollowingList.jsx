import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import User from '../../components/Common/User';
import {} from './FollowListStyle';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { followingList } from '../../api/FollowingList';

export default function FollowingList() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const userInfo = useRecoilValue(UserAtom);
  const userAccountname = userInfo.accountname;
  const userToken = userInfo.token;
  const userProfileData = ProfileData([userAccountname, userToken]);
  console.log(FollowingData);
  // const [followingList, setFollowingList] = useState([
  //   ...followingList,
  //   followingList,
  // ]);
  return (
    <div>
      <button onClick={goBack}>
        <img src={ArrowIcon} alt='' />
      </button>
      <h1>Followings</h1>
      <userList>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
      </userList>
    </div>
  );
}

export const userList = styled.ul``;

function FollowingData([accountname, token]) {
  const url = `https://mandarin.api.weniv.co.kr/profile/${accountname}/following`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return console.log(Response.data);
}
