import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';

// import { PostImagesUpload } from '../../api/PostImagesUpload';
import PutPostEdit from '../../api/PutPostEdit';
import { GetUserProfileImage } from '../../api/GetUserProfileImage';
import { useLocation } from 'react-router-dom';
import { PostImagesUpload } from '../../api/PostImagesUpload';
import useTextareaResize from '../../Hooks/useTextareaResizeHook';
import {
  TextInputContainer,
  ImagePreview,
  EditUploadBtnNav,
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
  const [userImage, setUserImage] = useState('');
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  useEffect(() => {
    GetUserProfileImage(token, setUserImage);
  }, [token]);
  useEffect(() => {
    setSelectedImages(post.image.split(','));
    setPreviewImages(post.image.split(','));
    setInputValue(post.content);
  }, [post.image]);

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
    const files = await event.target.files[0];

    try {
      const imageUrl = await PostImagesUpload(files);
      setSelectedImages((prevImages) => [...prevImages, imageUrl]);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImages([...previewImages, reader.result]);
      };
      reader.readAsDataURL(files);
    } catch (error) {
      // 오류 처리
      console.error(error);
    }
  };

  const handleUploadPost = async () => {
    const editedPost = await PutPostEdit(
      postId,
      token,
      inputValue,
      selectedImages.join(',')
    );

    if (editedPost) {
      setInputValue('');
      setSelectedImages([]);
      navigate(`/post/${postId}`, {
        state: postId,
      });
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };
  console.log(selectedImages);

  return (
    <div>
      <EditUploadBtnNav
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
          value={inputValue}
        ></TextInputContainer>
        <ImgWrapStyle>
          {selectedImages.map((image, index) => (
            <PreviewImgWrapStyle key={index}>
              <ImagePreview
                src={
                  typeof image === 'string' ? image : URL.createObjectURL(image)
                }
                alt={`게시물 이미지 ${index + 1}`}
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
