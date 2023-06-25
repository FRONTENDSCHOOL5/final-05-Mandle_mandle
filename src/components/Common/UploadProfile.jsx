import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import BasicProfile from '../../assets/img/basic-profile-img.svg';
import UploadBtnImg from '../../assets/img/img-upload-button.svg';
import styled from 'styled-components';

export default function UploadProfile({ onResponse, image }) {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(image || BasicProfile);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const url = 'https://api.mandarin.weniv.co.kr/';
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await axios.post(url + 'image/uploadfile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // 응답 처리
        console.log(response.data);
        onResponse(response.data.filename);
      } catch (error) {
        // 오류 처리
        console.error(error);
      }

      const reader = new FileReader();

      reader.onload = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
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
