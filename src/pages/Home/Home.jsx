import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuBar from '../../components/Common/MenuBar';
import { HomeNav } from '../../components/Common/TopNav';
import { UserAtom } from '../../Store/userInfoAtoms';
import { FollowPostAtom } from '../../Store/FollowPostAtom';
import { useRecoilValue } from 'recoil';
import PostList from '../../components/Common/PostList/PostList';
import GetFollowPost from '../../api/GetFollowPost';
import PostBlank from './PostBlank/PostBlank';
export default function Home({ to }) {
  const userInfo = useRecoilValue(UserAtom); // UserAtom값 불러오기
  const token = userInfo.token; // token값 바인딩
  const [postList, setpostList] = useState(null);
  const [postCount, setPostCount] = useState(5);

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
              <PostList post={post} />
            ))}
          </PostUlStyle>
        )}
      </MainWrap>
      <MenuBar />
    </HomeWrap>
  );
}
const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: var(--font-md);
`;

const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: calc(100% - 48px - 60px);
  padding: 0 16px;
`;
const PostUlStyle = styled.ul`
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
