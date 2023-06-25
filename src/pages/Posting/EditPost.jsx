import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { TextInputContainer, ImagePreview } from './Posting'; // Import shared components from Posting.jsx.
// import { PostImagesUpload } from '../../api/PostImagesUpload';
import PutPostEdit from '../../api/PutPostEdit';
import ProfileImg from '../../assets/img/mini-basic-progile-img.svg';
import ImageHandleHook from '../../Hooks/ImageHandleHook';
import { useLocation } from 'react-router-dom';
import { PostEditIImagesUpload } from '../../api/PostEditIImagesUpload';
import useTextareaResize from '../../Hooks/useTextareaResizeHook';
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

  const [previewImages, setPreviewImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(false);

  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  useEffect(() => {
    setSelectedImages(post.image.split(','));
    setPreviewImages(post.image.split(','));
    setInputValue(post.content);
  }, [post.image]);

  const { selectedImages, setSelectedImages, handleDeleteImage } =
    ImageHandleHook();

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
      const imageUrl = await PostEditIImagesUpload(files);
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

  console.log('담긴 값 확인', selectedImages);

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
