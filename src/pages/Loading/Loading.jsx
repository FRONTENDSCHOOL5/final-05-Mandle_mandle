import React from 'react';
import { LoadingWrap } from './LoadingStyle';
import LoadingImg from '../../assets/img/home-logo.svg';
import LoadingText from '../../assets/img/loading-text.svg';
export default function Loading() {
  return (
    <LoadingWrap>
      <img src={LoadingImg} className='bounce' alt='로딩중 캐릭터 이미지' />
      <img src={LoadingText} alt='로딩중 텍스트' />
    </LoadingWrap>
  );
}
