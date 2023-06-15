import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeLogo from '../../assets/img/home-logo.svg';
import MenuBar from '../../components/Common/MenuBar';
import ButtonStyle from '../../components/Common/Button';
import { HomeNav } from '../../components/Common/TopNav';
import PostList from '../../components/Common/PostList/PostList';
import { tokenState } from '../../Store/userInfoAtoms';
import { useRecoilState } from 'recoil';
export default function Home({ to }) {
  const token = useRecoilState(tokenState);
  console.log(token);
  return (
    <HomeWrap>
      <HomeNav title='홈' to={to}></HomeNav>
      <MainWrap>
        {/* <img src={HomeLogo} alt='' />
        <p>유저를 검색해 팔로우 해보세요!</p>
        <Link to={to}>
          <ButtonStyle
            width='120px'
            height='44px'
            color='#fff'
            bg='#036635'
            br='44px'
          >
            검색하기
          </ButtonStyle>
        </Link> */}
        {
          <ul>
            <PostList />
            <PostList />
          </ul>
        }
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 48px - 60px);
  padding: 0 16px;

  ul {
    overflow-y: scroll;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  /* p {
    padding: 10px 0 20px;
    color: var(--sub-font-color);
  } */
`;
