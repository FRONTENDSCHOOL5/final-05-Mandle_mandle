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
import Loading from '../Loading/Loading';
export default function Home({ to }) {
  const userInfo = useRecoilValue(UserAtom); // UserAtom값 불러오기
  const token = userInfo.token; // token값 바인딩
  const [postList, setpostList] = useState([]);

  useEffect(() => {
    const response = async () => {
      const data = await GetFollowPost(token);
      setpostList(data);
    };

    response();
  }, [token]);
  console.log(postList);
  return (
    <HomeWrap>
      <HomeNav title='홈' to='/home/search'></HomeNav>
      <MainWrap>
        {postList === null || postList.length === 0 ? (
          <Loading />
        ) : postList !== null && postList.length === 0 ? (
          <PostBlank
            text='아직 팔로워가 작성한 글이 없어요.'
            text2='검색을 통해 팔로워를 더 만들어 볼까요?'
          />
        ) : postList === null ? (
          <PostBlank text='유저를 검색해 팔로우 해보세요!' />
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
