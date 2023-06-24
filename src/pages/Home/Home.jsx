import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { HomeNav } from '../../components/Common/TopNav';
import { UserAtom } from '../../Store/userInfoAtoms';
import PostBlank from './PostBlank/PostBlank';
import GetFollowPost from '../../api/GetFollowPost';
import MenuBar from '../../components/Common/MenuBar';
import PostList from '../../components/Common/PostList/PostList';
import { HomeWrap, MainWrap, PostUlStyle } from './HomeStyle';
export default function Home({ to }) {
  const userInfo = useRecoilValue(UserAtom); // UserAtom값 불러오기
  const token = userInfo.token; // token값 바인딩
  const [postList, setpostList] = useState([]);
  const [postCount, setPostCount] = useState();
  const containerRef = useRef(null);
  useEffect(() => {
    const response = async () => {
      const data = await GetFollowPost(postCount, token);
      setpostList(data);
    };

    response();
  }, [postCount, token]);

  return (
    <HomeWrap>
      <HomeNav title='홈' to='/home/search'></HomeNav>
      <MainWrap>
        {postList === null || postList.length === 0 ? (
          <PostBlank />
        ) : (
          <PostUlStyle>
            {postList.map((post) => (
              <PostList key={post.id} post={post} />
            ))}
          </PostUlStyle>
        )}
      </MainWrap>
      <MenuBar />
    </HomeWrap>
  );
}
