import React, { useRef, useState } from 'react';
import BasicProfile from '../../assets/img/basic-profile-img.svg';
import UploadBtnImg from '../../assets/img/img-upload-button.svg';
import styled from 'styled-components';

export default function UploadProfile() {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(BasicProfile);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <UploadProfileWrap>
      <img src={previewImage} alt='' />
      <ImgUploadBtn type='button' onClick={handleImageUpload}>
        <img src={UploadBtnImg} alt='' />
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
