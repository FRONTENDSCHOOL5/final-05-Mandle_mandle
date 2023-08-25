import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import MoreButton from '../MoreButton';
import Modal from '../Modal/Modal';
import useImageCompression from '../../../Hooks/useImageCompression';
import PostReportPost from '../../../api/PostReportPost';
import DeletePost from '../../../api/DeletePost';
import ModalAlert from '../../Common/Modal/ModalAlert/ModalAlert';
export default function PostProfile({ post, setPostUpdated }) {
  const userInfo = useRecoilValue(UserAtom); // UserAtom값 불러오기
  const [isModalOpen, setModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const navigate = useNavigate();
  const [compressedImage, setCompressedImage] = useState(null);
  const { compressImage } = useImageCompression(); // useImageCompression 훅 사용
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (!isOptimized) {
      const optimizeProfileImage = async () => {
        if (post?.author?.image) {
          console.log('이미지 프로필 최적화 실행');

          try {
            const compressedImageUrl = await compressImage(post.author.image);
            if (compressedImageUrl) {
              console.log('압축된 이미지 URL:', compressedImageUrl);
              setCompressedImage(compressedImageUrl);
              setIsOptimized(true); // 최적화가 완료되었음을 표시
            }
          } catch (error) {
            console.error('이미지 압축 오류:', error);
          }
        }
      };

      optimizeProfileImage();
    }
  }, [post.author.image, compressImage, isOptimized]);

  const handleProfileClick = () => {
    navigate(`/other_profile/${post.author.accountname}`, {
      state: post.author.accountname,
    });
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleMovePostEdit = () => {
    navigate(`/post/${post.id}/edit`, { state: post });
  };

  const handleReportSubmit = async () => {
    const response = await PostReportPost(post.id, userInfo.token); // Call the API component
    if (response) {
      alert(`해당 게시글이 신고되었습니다.`);
      setModalOpen(false);
    }
  };

  const handleDeleteSubmit = async () => {
    const response = await DeletePost(post.id, userInfo.token); // Call the API component
    if (response) {
      setAlertModalOpen(false);
      alert(`해당 게시글이 삭제되었습니다.`);
      const currentURL = window.location.pathname;
      if (currentURL.startsWith('/post')) {
        navigate(-1); // 이전 페이지로 이동
      } else {
        setPostUpdated(true); // 새로고침(상태변경으로 바꿀 예정)
      }
    }
  };

  return (
    <PostProfileWrap>
      <button onClick={handleProfileClick}>
        <PostProfileImgWrap>
          <img src={compressedImage || post.author.image} alt='프로필 이미지' />{' '}
        </PostProfileImgWrap>
        <PostProfileInfo>
          <div>
            <p>{post.author.username}</p>
          </div>
          <p>{post.author.accountname.substr(7)}</p>
        </PostProfileInfo>
      </button>
      <MoreButton onClick={handleModalOpen} />
      {isModalOpen &&
        (post.author.accountname === userInfo.accountname ? (
          <Modal
            onClick={handleMovePostEdit}
            setModalOpen={setModalOpen}
            setAlertModalOpen={setAlertModalOpen}
            type='post'
            text='삭제'
          />
        ) : (
          <Modal
            onClick={handleReportSubmit}
            setModalOpen={setModalOpen}
            text='신고하기'
          />
        ))}

      {alertModalOpen && (
        <ModalAlert
          setAlertModalOpen={setAlertModalOpen}
          onClick={handleDeleteSubmit}
        />
      )}
    </PostProfileWrap>
  );
}

const PostProfileWrap = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

const PostProfileImgWrap = styled.div`
  width: 42px;
  height: 42px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const PostProfileInfo = styled.div`
  div {
    margin-bottom: 6px;
  }

  div + p {
    font-size: var(--font-sm);
    color: var(--sub-font-color);
  }
`;
