import React, { useState, useEffect } from 'react';
import { GoBackNav } from '../../../components/Common/TopNav';
import { FollowWrap } from './FollowListStyle';
import { useLocation } from 'react-router-dom';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import UserList from '../../../components/Common/UserList';
import { useInView } from 'react-intersection-observer';

export default function FollowerList() {
  const location = useLocation();
  const userInfo = useRecoilValue(UserAtom);
  const isMyProfile = location.pathname === '/my_profile/follower';
  const userAccountname = isMyProfile ? userInfo.accountname : location.state;
  const token = userInfo.token;

  const [followerData, setFollowerData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { ref, inView } = useInView(); // Hook to detect when an element comes into view

  useEffect(() => {
    fetchData();
  }, [userAccountname, token]);

  const fetchData = async () => {
    try {
      const newFollowerData = await FollowerData(userAccountname, token, page);
      if (newFollowerData.length > 0) {
        setFollowerData((prevData) => [...prevData, ...newFollowerData]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (inView && hasMore) {
      fetchData(); // Load more data when the ref element comes into view
    }
  }, [inView, hasMore]);

  if (followerData === null) {
    return null;
  }

  return (
    <FollowWrap>
      <GoBackNav />
      <h1>Followers</h1>
      <ul>
        {followerData.map((user, index) => (
          <React.Fragment key={user.id}>
            <UserList user={user} type='follow' />
            {index === followerData.length - 1 && (
              <li ref={ref} style={{ visibility: 'hidden' }}></li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </FollowWrap>
  );
}

async function FollowerData(accountname, token, page = 1, pageSize = 7) {
  const skip = (page - 1) * pageSize;
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower/?limit=${pageSize}&skip=${skip}`;

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
    return [];
  }
}
