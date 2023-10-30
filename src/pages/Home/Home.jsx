import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

import { useRecoilValue } from 'recoil';
import { AutoLogin, UserAtom } from '../../Store/userInfoAtoms';

import useScroll from '../../Hooks/useScroll';

import PostBlank from './PostBlank/PostBlank';
import GetFollowPost from '../../api/GetFollowPost';
import MenuBar from '../../components/Common/MenuBar';
import { HomeNav } from '../../components/Common/TopNav';
import PostList from '../../components/Common/PostList/PostList';
import PostSkeleton from '../../components/Common/Skeleton/PostSkeleton';

import { HomeWrap, MainWrap, PostUlStyle } from './HomeStyle';

export default function Home({ to }) {
  const userInfo = useRecoilValue(UserAtom); // UserAtom값 불러오기
  const autoLogin = useRecoilValue(AutoLogin);
  const token = userInfo.token; // token값 바인딩
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]); // 수정된 부분: 변수명 수정
  const isBottom = useScroll(postList, '#scroll-area');

  const navigate = useNavigate();

  useEffect(() => {
    const storedValue = localStorage.getItem('recoil-persist');
    const lastAccessTime = localStorage.getItem('lastAccessTime'); // 유저의 마지막 접속 시간 가져오기
    const currentTime = new Date().getTime(); // 현재 시간 가져오기

    if (!storedValue) {
      navigate('/intro');
      return; // 추가된 부분: 나머지 로직을 실행하지 않고 종료
    }

    if (
      lastAccessTime &&
      currentTime - parseInt(lastAccessTime) > 24 * 60 * 60 * 1000
    ) {
      // 마지막 접속 시간과 현재 시간의 차이가 24시간 (86400000ms) 보다 크면..
      if (!autoLogin) {
        localStorage.removeItem('recoil-persist'); //유저정보 삭제
        localStorage.removeItem('lastAccessTime'); // 마지막 접속 시간 삭제
      }
    } else {
      // 24시간 이내에 접속한 경우, 현재 시간을 마지막 접속 시간으로 갱신
      localStorage.setItem('lastAccessTime', currentTime.toString());
    }

    const beforeUnloadHandler = () => {
      if (
        autoLogin === false &&
        lastAccessTime &&
        currentTime - parseInt(lastAccessTime) > 24 * 60 * 60 * 1000
      ) {
        localStorage.removeItem('recoil-persist');
      }
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      const storedValueAfter = localStorage.getItem('recoil-persist');
      if (!storedValueAfter) {
        navigate('/intro');
      }
    };
  }, []);

  useEffect(() => {
    const response = async () => {
      const data = await GetFollowPost(token, skip);
      if (data) {
        setPostList((prevData) => [...prevData, ...data]);
        setTimeout(() => {
          setLoading(false); // 2초 뒤에 setLoading(false) 실행
        }, 1000); // 2000ms = 2초
        setSkip((prevSkip) => prevSkip + 5);
      }
    };
    response();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBottom]);

  return (
    <HomeWrap>
      <HomeNav title='홈' to='/home/search'></HomeNav>
      <MainWrap id='scroll-area'>
        {loading ? (
          <div>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </div>
        ) : (
          postList !== null &&
          (postList.length === 0 ? (
            <PostBlank text='유저를 검색해 팔로우 해보세요!' />
          ) : (
            <PostUlStyle>
              {postList.map((post) => (
                <PostList key={post.id} post={post} />
              ))}
            </PostUlStyle>
          ))
        )}
      </MainWrap>
      <MenuBar />
    </HomeWrap>
  );
}
