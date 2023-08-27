import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { HomeNav } from '../../components/Common/TopNav';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

import { AutoLogin, UserAtom } from '../../Store/userInfoAtoms';
import useScroll from '../../Hooks/useScroll';
import PostBlank from './PostBlank/PostBlank';
import GetFollowPost from '../../api/GetFollowPost';
import MenuBar from '../../components/Common/MenuBar';
import PostList from '../../components/Common/PostList/PostList';
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
    //최초 로드시 유저 정보 없으면 intro화면으로 보내기
    const storedValue = localStorage.getItem('recoil-persist');
    if (!storedValue) {
      navigate('/intro');
    }

    const beforeUnloadHandler = () => {
      if (autoLogin === false) {
        localStorage.removeItem('recoil-persist');
      }
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      //브라우조 종료 후 새롭게 브라우저 접근 시 유저 정보 없는 것 확인하고 intro 화면으로 보내기
      const storedValue = localStorage.getItem('recoil-persist');
      if (!storedValue) {
        navigate('/intro');
      }
    };
  }, []); //컴포넌트가 언마운트될 때 로컬스토리지에 저장된 유저 정보 삭제하여 로그인 해제

  useEffect(() => {
    const response = async () => {
      const data = await GetFollowPost(token, skip);
      if (data) {
        setPostList((prevData) => [...prevData, ...data]);
        setSkip((prevSkip) => prevSkip + 5);
      }
    };

    response();
  }, [token, skip]);
  return (
    <HomeWrap>
      <HomeNav title='홈' to='/home/search'></HomeNav>
      <MainWrap id='scroll-area'>
        {postList !== null &&
          (postList.length === 0 ? (
            <PostBlank />
          ) : (
            <PostUlStyle>
              {postList.map((post) => (
                <PostList key={post.id} post={post} />
              ))}
            </PostUlStyle>
          ))}
      </MainWrap>
      <MenuBar />
    </HomeWrap>
  );
}
