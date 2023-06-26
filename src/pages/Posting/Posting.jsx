import React, { useState, useEffect, useRef } from 'react';

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
  ImagePreview,
  TextInputContainer,
} from './PostingStyle';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { PostImagesUpload } from '../../api/PostImagesUpload';
import { useNavigate } from 'react-router-dom';
import PostUploadPost from '../../api/PostUploadPost';
import { GetUserProfileImage } from '../../api/GetUserProfileImage';

import useTextareaResize from '../../Hooks/useTextareaResizeHook';
export default function Posting() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(false);
  const [userImage, setUserImage] = useState('');

  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  const navigate = useNavigate();

  useEffect(() => {
    GetUserProfileImage(token, setUserImage);
  }, [token]);

  const { textarea, handleTextareaChange } = useTextareaResize(
    inputValue,
    setInputValue
  );

  useEffect(() => {
    if (inputValue || selectedImages.length > 0) {
      setButtonStyle(true);
    } else {
      setButtonStyle(false);
    }
  }, [inputValue, selectedImages]);

  const handleImageChange = async (event) => {
    const files = event.target.files;
    let imagesArray = [...selectedImages];
    if (imagesArray.length + files.length > 3) {
      alert('이미지는 최대 3개까지 업로드가 가능합니다.');
      return;
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.size > 1024 * 1024 * 10) {
        alert('10MB 이상의 이미지는 업로드 할 수 없습니다.');
        return;
      }
      if (!file.name.match(/\.(jpg|gif|png|jpeg|bmp|tif|heic)$/i)) {
        alert('이미지 파일만 업로드가 가능합니다.');
        return;
      }

      imagesArray.push(file);
    }

    setSelectedImages(imagesArray);
  };

  const handleUploadPost = async () => {
    const images = await PostImagesUpload(selectedImages);
    const response = await PostUploadPost(token, inputValue, images);

    if (response) {
      setInputValue('');
      setSelectedImages([]);
      navigate(`/post/${response.post.id}`, {
        state: response.post.id,
      });
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div>
      <DisabledUploadBtnNav
        handleUploadPost={handleUploadPost}
        buttonStyle={buttonStyle}
      />
      <ProfileContainer>
        <ProfileImage src={userImage} alt='유저 프로필 이미지' />
        <FileUploadButton handleImageChange={handleImageChange} />
      </ProfileContainer>
      <PostFormStyle>
        <TextInputContainer
          placeholder='게시글 입력하기..'
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
      </PostFormStyle>
    </div>
  );
}
