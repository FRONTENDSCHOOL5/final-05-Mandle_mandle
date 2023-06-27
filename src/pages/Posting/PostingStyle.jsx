import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ProfileImg from '../../assets/img/mini-basic-progile-img.svg';
import ImgUploadBtn from '../../assets/img/img-upload-button.svg';
import { ButtonStyle } from '../../components/Common/Button';
import { TopNavWrap } from '../../components/Common/TopNav';
import ArrowIcon from '../../assets/img/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';
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
  top: 750px;
  left: 324px;
`;

export const UploadLabel = styled.label`
  cursor: pointer;
`;

export const UploadImg = styled.img``;

//업로드 될 이미지 스타일

export const PostFormStyle = styled.form`
  width: 100%;
`;

export const ImgWrapStyle = styled.ul`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    padding-top: 5px;
    background-color: white;

    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid white;
  }
  & > li + li {
    margin-left: 8px;
  }
  & > li:first-child {
    margin-left: 40px;
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

export function DisabledUploadBtnNav({ handleUploadPost, buttonStyle }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <TopNavWrap>
      <button onClick={goBack} className='go-back'>
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
        onClick={handleUploadPost}
      >
        업로드
      </ButtonStyle>
    </TopNavWrap>
  );
}

export function EditUploadBtnNav({ handleUploadPost, buttonStyle }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <TopNavWrap>
      <button onClick={goBack} className='go-back'>
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
        onClick={handleUploadPost}
      >
        수정하기
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

export const ImagePreview = styled.img`
  width: 304px;
  border-radius: 20px;
  max-height: 228px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  top: 20px;
  left: 50px;
`;

export const TextInputContainer = styled.textarea`
  font-family: 'SpoqaHanSansNeo-Regular';
  margin: 30px 0 50px 0;
  width: 100%;
  overflow-y: hidden;
  display: block;
  /* min-height: 80px; */
  height: 100%;
  font-size: var(--font-md);
  color: var(--font-color);
  padding-left: 71px;
  resize: none;
  outline: none;
  border: none;
  &::placeholder {
    color: var(--sub-font-color);
    font-size: var(--font-md);
  }
`;
