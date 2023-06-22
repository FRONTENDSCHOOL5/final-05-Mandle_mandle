import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { TextInputContainer, ImagePreview } from './Posting'; // Posting.jsx에서 공유된 컴포넌트들을 가져옵니다.
import { PostUpload } from '../../api/PostUpload'; // PostUpload.jsx에서 게시물 업로드 함수를 가져옵니다.
import PutPostEdit from '../../api/PutPostEdit';

// import {
//   DisabledUploadBtnNav,
//   ProfileContainer,
//   ProfileImage,
//   FileUploadButton,
//   ImgWrapStyle,
//   PreviewImgWrapStyle,
//   DeleteImgBtn,
//   PostFormStyle,
// } from './PostingStyle';
export default function EditPost() {
  const { postId } = useParams(); // URL 파라미터에서 postId에 접근합니다.
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(false);
  const textarea = useRef();
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;
  useEffect(() => {
    // 기존 게시물 데이터를 가져와서 폼을 채웁니다.
    const fetchPostData = async () => {
      try {
        const response = await axios.put(
          `https://api.mandarin.weniv.co.kr/post/${postId}`,
          {
            post: {
              content: postId.content,
              image: postId.image,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // const postData = response.data.post;
        const postData = response.data;
        setInputValue(postData.content);
        // 기존 게시물이 이미지 URL의 배열을 가지고 있다고 가정합니다.
        setSelectedImages(postData.images);
      } catch (error) {
        console.error('기존 게시물 데이터를 불러오는 데 실패했습니다!', error);
      }
    };

    fetchPostData();
  }, [postId]);

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
    // 이미지 선택과 유효성 검사를 처리합니다.
    // Posting.jsx와 유사한 구현 방식입니다.
  };

  const handleDeleteImage = (index) => {
    // 이미지 삭제를 처리합니다.
    // Posting.jsx와 유사한 구현 방식입니다.
  };

  const handleUpdatePost = async () => {
    const images = await PostUpload(selectedImages);
    console.log('업로드된 이미지 파일 이름:', images);
    const data = {
      post: {
        content: inputValue,
        image: images,
      },
    };

    try {
      const response = await axios.put(
        `https://api.mandarin.weniv.co.kr/post/${postId}`,
        data
      );

      console.log('게시물이 성공적으로 업데이트되었습니다!', response.data);
      setInputValue('');
      setSelectedImages([]);

      navigate(`/post/${postId}`);
    } catch (error) {
      console.error('게시물 업데이트에 실패했습니다:', error);
    }
  };

  return (
    <div>
      <button onClick={() => navigate(`/post/${postId}`)}>뒤로 가기</button>
      <TextInputContainer
        placeholder='게시글 입력...'
        onChange={handleTextareaChange}
        ref={textarea}
      ></TextInputContainer>
      <div>
        {/* {selectedImages.map((image, index) => (
          <ImagePreview
            key={index}
            src={image}
            alt={`게시글 이미지 ${index + 1}`}
          />
        ))} */}
      </div>
      <input type='file' multiple onChange={handleImageChange} />
      <button onClick={handleUpdatePost} disabled={!buttonStyle}>
        게시물 업데이트
      </button>
    </div>
  );
}
