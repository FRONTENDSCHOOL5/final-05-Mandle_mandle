import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '../../assets/img/icon-search.svg';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import MoreIcon from '../../assets/img/icon- more-vertical.svg';
import { ButtonStyle } from './Button';

export function HomeNav({ title, to }) {
  return (
    <TopNavWrap>
      <h1>만들만들 {title}</h1>
      <Link to={to}>
        <img className='search' src={SearchIcon} alt='검색하기 아이콘' />
      </Link>
    </TopNavWrap>
  );
}

export function SearchNav() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <TopNavWrap>
      <button onClick={goBack}>
        <img src={ArrowIcon} alt='뒤로가기 아이콘' />
      </button>
      {/* <label htmlFor='search-input' /> */}
      <input id='search-input' type='text' placeholder='계정 검색' />
    </TopNavWrap>
  );
}

export function MoreNav() {
  return (
    <TopNavWrap>
      <button className='go-back'>
        <img src={ArrowIcon} alt='뒤로가기 아이콘' />
      </button>

      <button className='more-icon'>
        <img src={MoreIcon} alt='더보기 아이콘' />
      </button>
    </TopNavWrap>
  );
}

export function GoBackNav() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <TopNavWrap>
      <button onClick={goBack}>
        <img src={ArrowIcon} alt='뒤로가기 아이콘' />
      </button>
    </TopNavWrap>
  );
}

function UploadBtnNav() {
  return (
    <TopNavWrap>
      <button className='go-back'>
        <img src={ArrowIcon} alt='뒤로가기 아이콘' />
      </button>

      <ButtonStyle
        type='button'
        bg='#036635'
        width='90px'
        height='32px'
        br='32px'
        color='#ffffff'
        fontsize='14px'
        margin='0 16px 0 0'
      >
        업로드
      </ButtonStyle>
    </TopNavWrap>
  );
}

function DisabledUploadBtnNav() {
  return (
    <TopNavWrap>
      <button className='go-back'>
        <img src={ArrowIcon} alt='뒤로가기 아이콘' />
      </button>
      <ButtonStyle
        type='button'
        bg='#b1d4c3'
        width='90px'
        height='32px'
        br='32px'
        color='#ffffff'
        fontsize='14px'
        margin='0 16px 0 0'
      >
        업로드
      </ButtonStyle>
    </TopNavWrap>
  );
}

export const TopNavWrap = styled.header`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  h1 {
  }

  input {
    width: 316px;
    height: 32px;
    border-radius: 32px;
    border: none;
    background-color: #f2f2f2;
    padding-left: 16px;
    font-size: 14px;
  }

  button,
  a {
  }
`;
