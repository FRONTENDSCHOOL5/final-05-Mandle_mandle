import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';

import Modal from '../Modal/Modal';
import MoreButton from '../MoreButton';
import NormalizeImage from '../NormalizeImage';
import DeletePost from '../../../api/DeletePost';
import PostReportPost from '../../../api/PostReportPost';
import ModalAlert from '../../Common/Modal/ModalAlert/ModalAlert';

import TeacherIcon from '../../../assets/img/icon-teacher.svg';

export default function PostProfile({ post, setPostUpdated }) {
  const userInfo = useRecoilValue(UserAtom); // UserAtom값 불러오기
  const [isModalOpen, setModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(null);
  const navigate = useNavigate();

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
      setAlertModalOpen(null);
      alert(`해당 게시글이 삭제되었습니다.`);
      const currentURL = window.location.pathname;

      if (currentURL.includes('/post')) {
        navigate(-1); // 이전 페이지로 이동
        return;
      }
      setPostUpdated(true);
    }
  };

  return (
    <PostProfileWrap>
      <button onClick={handleProfileClick}>
        <PostProfileImgWrap>
          <img src={NormalizeImage(post.author.image)} alt='프로필 이미지' />
        </PostProfileImgWrap>
        <PostProfileInfo>
          <div>
            <p>{post.author.username}</p>
            {post.author.accountname.includes('Teacher') && (
              <img src={TeacherIcon} alt='강사 아이콘' />
            )}
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
            type='delete'
            text='삭제'
          />
        ) : (
          <Modal
            setModalOpen={setModalOpen}
            setAlertModalOpen={setAlertModalOpen}
            type='report'
            text='신고하기'
          />
        ))}

      {alertModalOpen && (
        <ModalAlert
          setAlertModalOpen={setAlertModalOpen}
          onClick={
            alertModalOpen === 'delete'
              ? handleDeleteSubmit
              : handleReportSubmit
          }
          type={alertModalOpen}
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
    display: flex;
    gap: 3px;
    margin-bottom: 6px;
    img {
      width: 12px;
    }
  }

  div + p {
    font-size: var(--font-sm);
    color: var(--sub-font-color);
  }
`;
