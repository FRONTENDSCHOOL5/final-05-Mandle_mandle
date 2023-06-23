import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { TextInputContainer, ImagePreview } from './Posting'; // Import shared components from Posting.jsx.
import { PostImagesUpload } from '../../api/PostImagesUpload'; // Import the post upload function from PostUpload.jsx.
import PutPostEdit from '../../api/PutPostEdit';
import ProfileImg from '../../assets/img/mini-basic-progile-img.svg';

import { useLocation } from 'react-router-dom';
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

export default function EditPost() {
  const location = useLocation();
  const post = location.state;
  const postId = post.id;
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(false);
  const textarea = useRef();
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  useEffect(() => {
    setSelectedImages(post.image.split(','));
    setPreviewImages(post.image.split(','));
    setInputValue(post.content);
  }, [post.image]);

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
    const url = 'https://api.mandarin.weniv.co.kr/';
    const files = await event.target.files[0];

    const formData = new FormData();
    formData.append('image', files);

    try {
      const response = await axios.post(url + 'image/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 응답 처리
      console.log('이미지 성공');
      setSelectedImages([
        ...selectedImages,
        `https://api.mandarin.weniv.co.kr/${response.data.filename}`,
      ]);
    } catch (error) {
      // 오류 처리
      console.error(error);
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImages([...previewImages, reader.result]);
    };

    // if (imagesArray.length + files.length > 3) {
    //   alert('Up to 3 images can be uploaded.');
    //   return;
    // }

    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];

    //   if (file.size > 1024 * 1024 * 10) {
    //     alert('You cannot upload images larger than 10MB.');
    //     return;
    //   }
    //   if (!file.name.match(/\.(jpg|gif|png|jpeg|bmp|tif|heic)$/i)) {
    //     alert('이미지 파일만 업로드 할 수 있습니다.');
    //     return;
    //   }
  };

  console.log('담긴 값 확인', selectedImages);

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleUploadPost = async () => {
    console.log('함수 테스트', selectedImages);
    const editedPost = await PutPostEdit(
      postId,
      token,
      inputValue,
      selectedImages.join(',')
    );
    console.log('reponse값 테스트 :', editedPost);
    if (editedPost) {
      console.log('성공 제발');
      setInputValue('');
      setSelectedImages([]);
      navigate(`/post/${postId}`, {
        state: postId,
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
        <ProfileImage src={ProfileImg} alt='User Profile Image' />
      </ProfileContainer>
      <PostFormStyle>
        <TextInputContainer
          placeholder='Enter post...'
          onChange={handleTextareaChange}
          ref={textarea}
          value={inputValue}
        ></TextInputContainer>
        <ImgWrapStyle>
          {selectedImages.map((image, index) => (
            <PreviewImgWrapStyle key={index}>
              <ImagePreview
                src={
                  typeof image === 'string' ? image : URL.createObjectURL(image)
                }
                alt={`post image ${index + 1}`}
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
