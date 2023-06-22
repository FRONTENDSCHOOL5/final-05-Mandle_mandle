import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileImg from '../../../assets/img/basic-profile-img.svg';
import MoreBtn from '../../../assets/img/s-icon-more-vertical.svg';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import MoreButton from '../MoreButton';
import PostReportModal from '../../Common/Modal/PostReportModal';
import PostModal from '../../Common/Modal/PostModal';
import MadalAlert from '../../Common/Modal/ModalAlert/ModalAlert';
export default function PostProfile({ post }) {
  const userInfo = useRecoilValue(UserAtom); // UserAtom값 불러오기
  const [isModalOpen, setModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/profile/${post.author.accountname}`, {
      state: post.author.accountname,
    });
  };

  const handleClick = () => {
    setModalOpen(true);
    console.log(isModalOpen);
  };

  return (
    <PostProfileWrap>
      <button onClick={handlePostClick}>
        <div>
          <PostProfileImg src={post.author.image} alt='프로필 이미지' />
        </div>
        <PostProfileInfo>
          <div>
            <p>{post.author.username}</p>
          </div>
          <p>{post.author.accountname}</p>
        </PostProfileInfo>
      </button>
      <MoreButton onClick={handleClick} post={post} userInfo={userInfo} />
      {isModalOpen &&
        (post.author.accountname === userInfo.accountname ? (
          <PostModal
            post={post}
            setModalOpen={setModalOpen}
            setAlertModalOpen={setAlertModalOpen}
          />
        ) : (
          <PostReportModal
            data={post}
            setModalOpen={setModalOpen}
            category={'게시글'}
          />
        ))}
      {alertModalOpen && (
        <MadalAlert
          post={post}
          userInfo={userInfo}
          setAlertModalOpen={setAlertModalOpen}
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

const PostProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
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
