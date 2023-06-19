import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileIcon from "../../assets/img/mini-basic-progile-img.svg";
import {
  DisabledUploadBtnNav,
  ProfileContainer,
  ProfileImage,
  // TextInputContainer,
  FileUploadButton,
  ImgWrapStyle,
  PreviewImgWrapStyle,
  DeleteImgBtn,
  // ImagePreview,
  PostFormStyle,
} from "./PostingStyle";

export default function Posting() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const correctForm = /(.*?)\.(jpg|gif|png|jpeg|bmp|tf|heic|)$/;
  const [buttonStyle, setButtonStyle] = useState(false);

  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);

  const handleTextareaChange = (event) => {
    const textAreaValue = event.target.value;
    setInputValue(textAreaValue);
    if (textAreaValue) {
      setButtonStyle(true);
    } else {
      setButtonStyle(false);
    }
  };

  const calculateTextareaHeight = (value) => {
    const lineHeight = 20;
    const lines = value.split("\n").length;
    return `${lineHeight * lines}px`;
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    let imagesArray = [...selectedImages];
    if (imagesArray.length + files.length > 3) {
      alert("이미지 파일은 3장 까지만 업로드 가능합니다.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.size > 1024 * 1024 * 10) {
        alert("10MB 미만의 이미지 파일만 업로드가 가능합니다.");
        return;
      }
      if (!file.name.match(correctForm)) {
        alert(
          "이미지 파일만 업로드가 가능합니다. (*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)"
        );
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        imagesArray.push(reader.result);
        if (imagesArray.length === selectedImages.length + files.length) {
          setSelectedImages(imagesArray);
        }
      };

      reader.readAsDataURL(file);
      console.log(selectedImages);
    }

    if (selectedImages.length > 0) {
      setButtonStyle(true);
    } else {
      setButtonStyle(false);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div>
      <DisabledUploadBtnNav buttonStyle={buttonStyle} />
      <ProfileContainer>
        <ProfileImage src={ProfileIcon} alt="User Profile Image" />
      </ProfileContainer>
      <PostFormStyle>
        <TextInputContainer
          placeholder="게시글 입력..."
          onChange={handleTextareaChange}
          style={{ height: calculateTextareaHeight(inputValue) }}
        ></TextInputContainer>
        <ImgWrapStyle>
          {selectedImages.map((image, index) => (
            <PreviewImgWrapStyle key={index}>
              <ImagePreview src={image} alt={`게시글 이미지 ${index + 1}`} />
              <DeleteImgBtn
                onClick={() => handleDeleteImage(index)}
                type="button"
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
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
`;

export const TextInputContainer = styled.textarea`
  width: 390px;
  overflow-y: hidden;
  display: block;
  min-height: 130px;
  padding-left: 71px;
  padding-top: 32px;
  font-size: 14px;
  border-radius: 1px;
  resize: none;
  border: none;

  &:focus {
    outline: none;
  }
`;
