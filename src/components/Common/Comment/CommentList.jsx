import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../assets/img/basic-profile-img.svg';
import MoreBtn from '../../../assets/img/s-icon-more-vertical.svg';
import MoreButton from '../MoreButton';
export default function CommentList(comment) {
  function getTimeAgo(timestamp) {
    const now = new Date(); // 현재 시간
    const time = new Date(timestamp); // 주어진 시간

    const diff = Math.round((now - time) / 1000); // 현재 시간과 주어진 시간의 차이를 초 단위로 계산

    if (diff < 60) {
      return `${diff}분 전`;
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes}분 전`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours}시간 전`;
    } else {
      const days = Math.floor(diff / 86400);
      return `${days}일 전`;
    }
  }

  console.log(comment, comment.author);
  return (
    <CommentListWrap>
      <ProfileWrap>
        <ProfileInfo>
          <ProfileImgStyle src={ProfileImg} alt='' />
          <div>
            <p>{comment.comment.author.username}</p>
            <p>{getTimeAgo(comment.comment.createdAt)}</p>
          </div>
        </ProfileInfo>
        <MoreButton />
      </ProfileWrap>
      <CommentContent>{comment.comment.content}</CommentContent>
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

const ProfileImgStyle = styled.img`
  width: 42px;
  height: 42px;
`;

const CommentContent = styled.p`
  padding-left: 48px;
`;
