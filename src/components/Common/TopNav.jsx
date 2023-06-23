import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '../../assets/img/icon-search.svg';
import MoreIcon from '../../assets/img/icon- more-vertical.svg';
import { ButtonStyle } from './Button';
import GoBackButton from './GoBackButton';

// home
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

// 검색, input있는 버전
export function SearchNav({ onChange, value }) {
  return (
    <TopNavWrap>
      <GoBackButton />
      <input
        id='search-input'
        type='text'
        onChange={onChange}
        value={value}
        placeholder='계정 검색'
      />
    </TopNavWrap>
  );
}

// 뒤로가기 + 더보기
export function MoreNav() {
  return (
    <TopNavWrap>
      <GoBackButton />
      <button className='more-icon'>
        <img src={MoreIcon} alt='더보기 아이콘' />
      </button>
    </TopNavWrap>
  );
}

// 뒤로가기만 있는 버전
export function GoBackNav() {
  return (
    <TopNavWrap>
      <GoBackButton />
    </TopNavWrap>
  );
}

// 뒤로가기 + 업로드 버튼
function UploadBtnNav() {
  return (
    <TopNavWrap>
      <GoBackButton />
      <ButtonStyle
        type='button'
        bg='var(--main-color)'
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
      <GoBackButton />
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
  width: 100%;
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
