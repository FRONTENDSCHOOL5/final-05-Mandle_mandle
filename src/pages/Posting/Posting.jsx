import React, { useState, useRef } from "react";
import styled from "styled-components";
import ProfileIcon from "../../assets/img/mini-basic-progile-img.svg";
import {
  DisabledUploadBtnNav,
  ProfileContainer,
  ProfileImage,
  TextInput,
  FileUploadButton,
  ImgWrapStyle,
  PreviewImgWrapStyle,
  DeleteImgBtn,
  UserImg,
  PostFormStyle,
} from "./PostingStyle";

export default function Posting() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [inptValue, setInptValue] = useState("");
  const correctForm = /(.*?)\.(jpg|gif|png|jpeg|bmp|tif|heic|)$/;
  const [buttonStyle, setButtonStyle] = useState(false);

  //입력되는 텍스트 값들 받아오기 & 값이 있으면 업로드 버튼 색 활성화 변경해주기
  const handleTextareaChange = (event) => {
    const inputValue = event.target.value;
    setInptValue(inputValue);
    if (inputValue) {
      setButtonStyle(true);
    } else {
      setButtonStyle(false);
    }
  };

  //텍스트 height 계산하는 함수
  const calculateTextareaHeight = (value) => {
    const lineHeight = 20;
    const lines = value.split("\n").length;
    return `${lineHeight * lines}px`;
  };

  //유저가 선택한 이미지 확인하는 함수
  const handleImageChange = (event) => {
    const files = event.target.files;
    let imagesArray = [...selectedImages]; // 현재 선택된 이미지 배열 복사
    if (imagesArray.length + files.length > 3) {
      alert("최대 3개의 파일까지 업로드할 수 있습니다.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.size > 1024 * 1024 * 10) {
        alert("10MB보다 큰 이미지는 업로드할 수 없습니다.");
        return;
      }
      if (!file.name.match(correctForm)) {
        alert(
          "이미지 파일만 업로드할 수 있습니다. (*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)"
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
    }
    //업로드된  이미지가 화면에 있으면 버튼색 변경
    if (selectedImages) {
      setButtonStyle(true);
    } else {
      setButtonStyle(false);
    }
  };

  return (
    <div>
      <DisabledUploadBtnNav buttonStyle={buttonStyle} />
      <ProfileContainer>
        <ProfileImage src={ProfileIcon} alt="유저 프로필 이미지" />
      </ProfileContainer>
      <PostFormStyle>
        <TextInputContainer
          placeholder="게시글 입력하기..."
          onChange={handleTextareaChange}
          style={{ height: calculateTextareaHeight(inptValue) }}
        ></TextInputContainer>
        <UserImg selectedImages={selectedImages} />
        {/* <ImgInput></ImgInput> */}
        {/* <UserImg selectedImages={selectedImages} /> */}
        <FileUploadButton handleImageChange={handleImageChange} />
      </PostFormStyle>
    </div>
  );
}

export const TextInputContainer = styled.textarea`
  width: 390px;
  /* height: 844px; */
  overflow-y: hidden;
  display: block;
  min-height: 130px;
  padding-left: 71px;
  padding-top: 32px;
  font-size: 14px;
  /* border: 1px solid #c4c4c4; */
  border-radius: 1px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  resize: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

// const ImagePreview = styled.img`
//   width: 100%;
//   height: auto;
//   max-height: 300px;
//   object-fit: cover;
// `;

//접근성을 위해 버튼을 맨 위로 올리기
