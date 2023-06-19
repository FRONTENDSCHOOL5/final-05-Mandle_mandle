import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ProfileImg from "../../assets/img/mini-basic-progile-img.svg";
import ImgUploadBtn from "../../assets/img/img-upload-button.svg";
import { ButtonStyle } from "../../components/Common/Button";
import { TopNavWrap } from "../../components/Common/TopNav";
import ArrowIcon from "../../assets/img/icon-arrow-left.svg";
import ProfileIcon from "../../assets/img/mini-basic-progile-img.svg";
import DeletBtn from "../../assets/img/icon-x.svg";

// export const TextInputContainer = styled.textarea`
//   width: 390px;
//   /* height: 844px; */
//   overflow-y: hidden;
//   display: block;
//   min-height: 30px;
//   padding-left: 71px;
//   padding-top: 32px;
//   font-size: 14px;
//   border: 1px solid #c4c4c4;
//   border-radius: 1px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   resize: none;

//   &:focus {
//     outline: none;
//   }
// `;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 20px;
  left: 16px;
  width: 42px;
  height: 42px;
`;

export const UploadButton = styled.div`
  position: absolute;
  top: 828px;
  left: 324px;
`;

export const UploadLabel = styled.label`
  cursor: pointer;
`;

export const UploadImg = styled.img``;

//업로드 될 이미지 스타일

export const PostFormStyle = styled.form`
  width: 100%;
  /* height: 844px; */
`;

export const ImgWrapStyle = styled.ul`
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > li + li {
    margin-left: 8px;
  }
`;

export const PreviewImgWrapStyle = styled.li`
  position: relative;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 20px;
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

export function DisabledUploadBtnNav({ handleUploadImage, buttonStyle }) {
  return (
    <TopNavWrap>
      <button className="go-back">
        <img src={ArrowIcon} alt="뒤로가기 아이콘" />
      </button>
      <ButtonStyle
        type="button"
        bg={buttonStyle ? "#036635" : "#b1d4c3"} // 버튼 색 설정
        width="90px"
        height="32px"
        br="32px"
        color="#ffffff"
        fontsize="14px"
        margin="0 16px 0 0"
        onClick={handleUploadImage}
      >
        업로드
      </ButtonStyle>
    </TopNavWrap>
  );
}

{
  /* <ButtonStyle
  type="button"
  bg="#036635"
  width="90px"
  height="32px"
  br="32px"
  color="#ffffff"
  fontsize="14px"
  margin="0 16px 0 0"
  >
  업로드
  </ButtonStyle> */
}
export function FileUploadButton({ handleImageChange }) {
  return (
    <UploadButton>
      <UploadLabel htmlFor="image-upload">
        <UploadImg src={ImgUploadBtn} alt="상품 이미지" />
      </UploadLabel>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </UploadButton>
  );
}

// export const TextInput = () => {
//   return (
//     <TextInputContainer
//       type="text"
//       placeholder="게시글 입력하기"
//     ></TextInputContainer>
//   );
// };

export const UserImg = ({ selectedImages }) => {
  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);
  const [images, setImages] = useState(selectedImages);

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    console.log(images);
  };

  return (
    <ImgWrapStyle>
      {selectedImages.map((image, index) => (
        <PreviewImgWrapStyle key={index}>
          <ImagePreview src={image} alt={`상품 이미지 ${index + 1}`} />
          <DeleteImgBtn
            onClick={() => handleDeleteImage(index)}
            type="button"
          />
        </PreviewImgWrapStyle>
      ))}
    </ImgWrapStyle>
  );
};
