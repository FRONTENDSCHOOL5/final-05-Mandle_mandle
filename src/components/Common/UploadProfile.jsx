import React, { useRef, useState, useEffect } from 'react';
import BasicProfile from '../../assets/img/basic-profile-img.svg';
import UploadBtnImg from '../../assets/img/img-upload-button.svg';
import styled from 'styled-components';
import { PostImagesUpload } from '../../api/PostImagesUpload';
export default function UploadProfile({ onResponse, image }) {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(image || BasicProfile);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    const response = await PostImagesUpload(selectedFile);
    onResponse(response);

    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  useEffect(() => {
    if (image) {
      setPreviewImage(image);
    }
  }, [image]);

  return (
    <UploadProfileWrap>
      <img src={previewImage} alt='기본 사용자 프로필 사진 ' />
      <ImgUploadBtn type='button' onClick={handleImageUpload}>
        <img src={UploadBtnImg} alt='이미지 업로드 버튼' />
        <input
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </ImgUploadBtn>
    </UploadProfileWrap>
  );
}

const UploadProfileWrap = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  overflow: hidden;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ImgUploadBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  img {
    width: 36px;
  }
`;
