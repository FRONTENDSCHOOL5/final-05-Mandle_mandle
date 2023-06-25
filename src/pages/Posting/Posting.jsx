import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {
  DisabledUploadBtnNav,
  ProfileContainer,
  ProfileImage,
  FileUploadButton,
  ImgWrapStyle,
  PreviewImgWrapStyle,
  DeleteImgBtn,
  PostFormStyle,
} from './PostingStyle';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { PostImagesUpload } from '../../api/PostImagesUpload';
import { useNavigate } from 'react-router-dom';
import PostUploadPost from '../../api/PostUploadPost';
import { GetUserProfileImage } from '../../api/GetUserProfileImage';
import ImageHandleHook from '../../CustomHook/ImageHandleHook';

export default function Posting() {
  const [inputValue, setInputValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(false);
  const [userImage, setUserImage] = useState('');
  const textarea = useRef();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  const navigate = useNavigate();
  console.log(token);

  useEffect(() => {
    GetUserProfileImage(token, setUserImage);
  }, [token]);

  const {
    selectedImages,
    setSelectedImages,
    handleImageChange,
    handleDeleteImage,
  } = ImageHandleHook();

  useEffect(() => {
    if (inputValue || selectedImages.length > 0) {
      setButtonStyle(true);
    } else {
      setButtonStyle(false);
    }
  }, [inputValue, selectedImages]);

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const handleTextareaChange = (event) => {
    setInputValue(event.target.value);
    handleResizeHeight();
  };

  const handleUploadPost = async () => {
    const images = await PostImagesUpload(selectedImages);
    console.log('업로드될 이미지 파일 이름 :', images);
    const response = await PostUploadPost(token, inputValue, images);
    console.log(response);
    if (response) {
      setInputValue('');
      setSelectedImages([]);
      navigate(`/post/${response.post.id}`, {
        state: response.post.id,
      });
    }
  };

  return (
    <div>
      <DisabledUploadBtnNav
        handleUploadPost={handleUploadPost}
        buttonStyle={buttonStyle}
      />
      <ProfileContainer>
        <ProfileImage src={userImage} alt='User Profile Image' />
      </ProfileContainer>
      <PostFormStyle>
        <TextInputContainer
          placeholder='게시글 입력...'
          onChange={handleTextareaChange}
          ref={textarea}
        ></TextInputContainer>
        <ImgWrapStyle>
          {selectedImages.map((image, index) => (
            <PreviewImgWrapStyle key={index}>
              <ImagePreview
                src={URL.createObjectURL(image)}
                alt={`게시글 이미지 ${index + 1}`}
              />
              <DeleteImgBtn
                onClick={() => handleDeleteImage(index)}
                type='button'
              />
            </PreviewImgWrapStyle>
          ))}
        </ImgWrapStyle>
        <FileUploadButton handleImageChange={handleImageChange} />
      </PostFormStyle>
    </div>
  );
}

export const ImagePreview = styled.img`
  max-width: 304px;
  border-radius: 20px;
  height: 228px;
  object-fit: cover;

  top: 20px;
  left: 50px;
`;

export const TextInputContainer = styled.textarea`
  margin-top: 30px;
  width: 100%;
  overflow-y: hidden;
  display: block;
  min-height: 80px;
  padding-left: 71px;
  resize: none;
  outline: none;
  border: none;
`;
