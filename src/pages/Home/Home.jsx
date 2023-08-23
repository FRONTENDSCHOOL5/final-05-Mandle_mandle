import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { HomeNav } from '../../components/Common/TopNav';
import { UserAtom } from '../../Store/userInfoAtoms';
import useScroll from '../../Hooks/useScroll';
import PostBlank from './PostBlank/PostBlank';
import GetFollowPost from '../../api/GetFollowPost';
import MenuBar from '../../components/Common/MenuBar';
import PostList from '../../components/Common/PostList/PostList';
import { HomeWrap, MainWrap, PostUlStyle } from './HomeStyle';
import Loading from '../Loading/Loading';
export default function Home({ to }) {
  const userInfo = useRecoilValue(UserAtom); // UserAtom값 불러오기
  const token = userInfo.token; // token값 바인딩
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(true);
  const [postList, setpostList] = useState([]);
  const isBottom = useScroll(postList, '#scroll-area');

  useEffect(() => {
    const response = async () => {
      const data = await GetFollowPost(token, skip);
      if (data) {
        setpostList((prevData) => [...prevData, ...data]);
        setSkip((prevSkip) => prevSkip + 5);
      }
    };

    response();
  }, [token]);

  return (
    <HomeWrap>
      <HomeNav title='홈' to='/home/search'></HomeNav>
      <MainWrap id='scroll-area'>
          postList !== null &&
          (postList.length === 0 ? (
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
