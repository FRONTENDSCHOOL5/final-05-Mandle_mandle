import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from '../../../assets/img/home-logo.svg';
import ButtonStyle from '../../../components/Common/Button';

export default function PostBlank({ to }) {
  return (
    <>
      <img src={HomeLogo} alt='' />
      <p>유저를 검색해 팔로우 해보세요!</p>
      <Link to='/home/search'>
        <ButtonStyle
          width='120px'
          height='44px'
          color='#fff'
          bg='#036635'
          br='44px'
        >
          검색하기
        </ButtonStyle>
      </Link>
    </>
  );
}
