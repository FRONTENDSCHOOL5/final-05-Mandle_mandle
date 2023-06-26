import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../assets/img/basic-profile-img.svg';
import MoreBtn from '../../../assets/img/s-icon-more-vertical.svg';
import MoreButton from '../MoreButton';
import CalTimeAgo from '../CalTimeAgo';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import ModalAlert from '../Modal/ModalAlert/ModalAlert';
import Modal from '../../Common/Modal/Modal';
import ReportModal from '../../Common/Modal/ReportModal';
import PostReportComment from '../../../api/PostReportComment';
import DeleteComment from '../../../api/DeleteComment';
export default function CommentList({ postId, comment, setCommentUpdated }) {
  const userInfo = useRecoilValue(UserAtom);
  const [isModalOpen, setModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false);

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
    }
  };

  // 댓글 삭제 API 전송
  const handleDeleteSubmit = async () => {
    const response = await DeleteComment(postId, comment.id, userInfo.token); // Call the API component
    if (response) {
      alert(`해당 댓글이 삭제되었습니다.`);
      setAlertModalOpen(false);
      setCommentUpdated(true);
    }
  };

  return (
    <CommentListWrap>
      <ProfileWrap>
        <ProfileInfo>
          <ProfileImgwrap>
            <img src={comment.author.image || ProfileImg} alt='' />
          </ProfileImgwrap>

          <div>
            <p>{comment.author.username}</p>
            <p>{CalTimeAgo(comment.createdAt)}</p>
          </div>
        </ProfileInfo>
        <MoreButton onClick={handleClick} />
      </ProfileWrap>
      <CommentContent>{comment.content}</CommentContent>
      {isModalOpen &&
        (comment.author.accountname === userInfo.accountname ? (
          <Modal
            setModalOpen={setModalOpen}
            setAlertModalOpen={setAlertModalOpen}
            text='삭제'
          />
        ) : (
          <ReportModal
            setModalOpen={setModalOpen}
            onClick={handleReportSubmit}
            category={'게시글'}
          />
        ))}
      {alertModalOpen && (
        <ModalAlert
          setAlertModalOpen={setAlertModalOpen}
          onClick={handleDeleteSubmit}
        />
      )}
    </CommentListWrap>
  );
}

const CommentListWrap = styled.li`
  font-size: var(--font-md);
  margin-bottom: 16px;
  img {
    width: 36px;
  }
`;

const ProfileWrap = styled.div`
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

const ProfileImgwrap = styled.div`
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
