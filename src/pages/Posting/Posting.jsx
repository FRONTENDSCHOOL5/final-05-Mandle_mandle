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
import { PostUpload } from '../../api/PostUpload';

export default function Posting() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(false);
  const [userImage, setUserImage] = useState('');
  const textarea = useRef();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  console.log(token);

  useEffect(() => {
    const loadMyProfileImage = async () => {
      try {
        const response = await axios.get(
          'https://api.mandarin.weniv.co.kr/user/myinfo',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserImage(response.data.user.image);
      } catch (error) {
        console.error('Failed to load profile image!', error);
      }
    };

    loadMyProfileImage();
    console.log(loadMyProfileImage());
  }, [token]);

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

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleUploadImage = async () => {
    const images = await PostUpload(selectedImages);
    console.log('업로드될 이미지 파일 이름 :', images);
    const data = {
      post: {
        content: inputValue,
        image: images,
      },
    };

    try {
      const response = await axios.post(
        'https://api.mandarin.weniv.co.kr/post',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('게시물 등록 성공!! :', response.data);

      setInputValue('');
      setSelectedImages([]);
    } catch (error) {
      console.error('게시물 등록 실패!!:', error);
    }
  };

  return (
    <div>
      <DisabledUploadBtnNav
        handleUploadImage={handleUploadImage}
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
          // style={{ height: calculateTextareaHeight(inputValue) }}
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
  /* width: 390px; */
  width: 100%;
  overflow-y: hidden;
  display: block;
  min-height: 80px;
  padding-left: 71px;
  resize: none;
  outline: none;
  border: none;
`;
