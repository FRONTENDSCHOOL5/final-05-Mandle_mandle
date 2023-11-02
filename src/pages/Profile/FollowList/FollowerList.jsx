import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { GoBackNav } from '../../../components/Common/TopNav';
import FollowList from '../../../components/Common/FollowList';
import { FollowWrap } from './FollowListStyle';
import GetFollowerData from '../../../api/GetFollwerData';

export default function FollowerList() {
  const location = useLocation();
  const userInfo = useRecoilValue(UserAtom);
  const isMyProfile = location.pathname === '/my_profile/follower';
  const userAccountname = isMyProfile ? userInfo.accountname : location.state;
  const token = userInfo.token;
  const [followerData, setFollowerData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  useEffect(() => {
    fetchData();
  }, [userAccountname, token]);

  const fetchData = async () => {
    try {
      const newFollowerData = await GetFollowerData(
        userAccountname,
        token,
        page
      );
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
      fetchData();
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
            <FollowList user={user} type='follow' />
            {index === followerData.length - 1 && (
              <li ref={ref} style={{ visibility: 'hidden' }}></li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </FollowWrap>
  );
}
