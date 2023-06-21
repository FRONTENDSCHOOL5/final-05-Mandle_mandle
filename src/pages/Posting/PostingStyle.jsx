import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ProfileImg from '../../assets/img/mini-basic-progile-img.svg';
import ImgUploadBtn from '../../assets/img/img-upload-button.svg';
import { ButtonStyle } from '../../components/Common/Button';
import { TopNavWrap } from '../../components/Common/TopNav';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';

import DeletBtn from '../../assets/img/icon-x.svg';

export const ProfileContainer = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 20px;
  left: 16px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const UploadButton = styled.div`
  position: absolute;
  top: 768px;
  left: 324px;
`;

export const UploadLabel = styled.label`
  cursor: pointer;
`;

export const UploadImg = styled.img``;

//업로드 될 이미지 스타일

export const PostFormStyle = styled.form`
  width: 100%;
  /* height: 844px; */
`;

export const ImgWrapStyle = styled.ul`
  display: flex;
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > li + li {
    margin-left: 8px;
  }
`;

export const PreviewImgWrapStyle = styled.li`
  position: relative;
`;

export const DeleteImgBtn = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 11px;
  right: 11px;
  background: url(${DeletBtn}) no-repeat;
  background-size: cover;
`;

//업로드 될 이미지 스타일

export function ProfileBox() {
  <ProfileContainer>
    <ProfileImage src={ProfileImg} />
  </ProfileContainer>;
}

export function DisabledUploadBtnNav({ handleUploadImage, buttonStyle }) {
  return (
    <TopNavWrap>
      <button className='go-back'>
        <img src={ArrowIcon} alt='뒤로가기 아이콘' />
      </button>
      <ButtonStyle
        type='button'
        bg={buttonStyle ? '#036635' : '#b1d4c3'} // 버튼 색 설정
        width='90px'
        height='32px'
        br='32px'
        color='#ffffff'
        fontsize='14px'
        margin='0 16px 0 0'
        onClick={handleUploadImage}
      >
        업로드
      </ButtonStyle>
    </TopNavWrap>
  );
}

export function FileUploadButton({ handleImageChange }) {
  return (
    <UploadButton>
      <UploadLabel htmlFor='image-upload'>
        <UploadImg src={ImgUploadBtn} alt='상품 이미지' />
      </UploadLabel>
      <input
        id='image-upload'
        type='file'
        accept='image/*'
        multiple
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </UploadButton>
  );
}
