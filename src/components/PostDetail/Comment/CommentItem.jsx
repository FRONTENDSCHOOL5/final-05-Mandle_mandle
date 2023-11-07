import React, { useState } from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';

import CalTimeAgo from '../../Common/CalTimeAgo';
import MoreButton from '../../Common/MoreButton';
import Modal from '../../Common/Modal/Modal';
import NormalizeImage from '../../Common/NormalizeImage';
import DeleteComment from '../../../api/DeleteComment';
import ModalAlert from '../../Common/Modal/ModalAlert/ModalAlert';
import PostReportComment from '../../../api/PostReportComment';

export default function ComentItem({ postId, comment, setCommentUpdated }) {
  const userInfo = useRecoilValue(UserAtom);
  const [isModalOpen, setModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(null);

  const handleClick = () => {
    setModalOpen(true);
  };

  // 댓글 신고 API 전송
  const handleReportSubmit = async () => {
    const response = await PostReportComment(
      postId,
      comment.id,
      userInfo.token,
    );
    if (response) {
      alert(`해당 댓글이 신고되었습니다.`);
      setModalOpen(false);
    }
  };

  // 댓글 삭제 API 전송
  const handleDeleteSubmit = async () => {
    const response = await DeleteComment(postId, comment.id, userInfo.token); // Call the API component
    if (response) {
      alert(`해당 댓글이 삭제되었습니다.`);
      setAlertModalOpen(null);
      setCommentUpdated(true);
    }
  };

  return (
    <ComentItemWrap>
      <ProfileBox>
        <ProfileInfo>
          <ProfileImgBox>
            <img src={NormalizeImage(comment.author.image)} alt='' />
          </ProfileImgBox>

          <div>
            <p>{comment.author.username}</p>
            <p>{CalTimeAgo(comment.createdAt)}</p>
          </div>
        </ProfileInfo>
        <MoreButton onClick={handleClick} />
      </ProfileBox>
      <CommentContent>{comment.content}</CommentContent>
      {isModalOpen &&
        (comment.author.accountname === userInfo.accountname ? (
          <Modal
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
    </ComentItemWrap>
  );
}

const ComentItemWrap = styled.li`
  font-size: var(--font-md);
  margin-bottom: 16px;
  img {
    width: 36px;
  }
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ProfileInfo = styled.button`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-bottom: 4px;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
    p + p {
      color: var(--sub-font-color);
      font-size: 10px;
    }
  }

  button img {
    margin-right: 0px;
    width: 18px;
    height: 20px;
  }
`;

const ProfileImgBox = styled.div`
  width: 36px;
  height: 36px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const CommentContent = styled.p`
  padding-left: 48px;
`;
