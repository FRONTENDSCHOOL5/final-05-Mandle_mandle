import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileImg from '../../../assets/img/basic-profile-img.svg';
import MoreBtn from '../../../assets/img/s-icon-more-vertical.svg';
import MoreButton from '../MoreButton';
export default function PostProfile({ author }) {
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`/profile/${author.accountname}`, { state: author.accountname });
  };

  return (
    <PostProfileWrap>
      <button onClick={handlePostClick}>
        <div>
          <PostProfileImg src={author.image} alt='프로필 이미지' />
        </div>
        <PostProfileInfo>
          <div>
            <p>{author.username}</p>
          </div>
          <p>{author.accountname}</p>
        </PostProfileInfo>
      </button>
      <MoreButton />
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
