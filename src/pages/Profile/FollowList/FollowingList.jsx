import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { GoBackNav } from '../../../components/Common/TopNav';
import FollowList from '../../../components/Common/FollowList';
import { FollowWrap } from './FollowListStyle';
import GetFollowingData from '../../../api/GetFollwerData';

export default function FollowingList() {
  const location = useLocation();
  const userInfo = useRecoilValue(UserAtom);
  const isMyProfile = location.pathname === '/my_profile/following';
  const userAccountname = isMyProfile ? userInfo.accountname : location.state;
  const token = userInfo.token;
  const [followingData, setFollowingData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  useEffect(() => {
    fetchData();
  }, [userAccountname, token]);

  const fetchData = async () => {
    try {
      const newFollowingData = await GetFollowingData(
        userAccountname,
        token,
        page
      );
      if (newFollowingData.length > 0) {
        setFollowingData((prevData) => [...prevData, ...newFollowingData]);
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
      fetchData();
    }
  }, [inView, hasMore]);

  if (followingData === null) {
    return null;
  }
  return (
    <FollowWrap>
      <GoBackNav />
      <h1>Followings</h1>
      <ul>
        {followingData.map((user, index) => (
          <React.Fragment key={user.id}>
            <FollowList user={user} type='follow' />
            {index === followingData.length - 1 && (
              <li ref={ref} style={{ visibility: 'hidden' }}></li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </FollowWrap>
  );
}
