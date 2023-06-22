import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import HeartIcon from '../../assets/img/icon-heart.svg';
import HeartedIcon from '../../assets/img/icon-heart-clicked.svg';
import { UserAtom } from '../../Store/userInfoAtoms';
import { useRecoilValue } from 'recoil';
import PostHeart from '../../api/PostHeart';
import DeleteHeart from '../../api/DeleteHeart';
export default function HeartButton({ post }) {
  const [isHearted, setIsHearted] = useState(post.hearted);
  const [heartCount, setHeartCount] = useState(post.heartCount);
  const postId = post.id;
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;

  const handleHeartActive = async () => {
    const response = await PostHeart(postId, token);
    console.log(response);
    setIsHearted(response.hearted);
    setHeartCount(response.heartCount);
  };

  const handleHeartCancel = async () => {
    const response = await DeleteHeart(postId, token);
    setIsHearted(response.hearted);
    setHeartCount(response.heartCount);
  };

  const handleHeartButtonClick = async () => {
    if (isHearted) {
      await handleHeartCancel();
    } else {
      await handleHeartActive();
    }
  };

  return (
    <HeartButtonWrap>
      <button onClick={handleHeartButtonClick}>
        <img src={isHearted ? HeartedIcon : HeartIcon} alt='' />
      </button>
      <p>{heartCount ? heartCount : 0}</p>
    </HeartButtonWrap>
  );
}
const HeartButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
