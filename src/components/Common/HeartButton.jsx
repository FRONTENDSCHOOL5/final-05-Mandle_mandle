import React from 'react';
import HeartIcon from '../../assets/img/icon-heart.svg';
import HeartedIcon from '../../assets/img/icon-heart-clicked.svg';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { FollowPostAtom } from '../../Store/FollowPostAtom';
import { useRecoilValue } from 'recoil';

import PostHeart from '../../api/PostHeart';
import DeleteHeart from '../../api/DeleteHeart';

export default function HeartButton({
  isHearted,
  setIsHearted,
  heartCount,
  setHeartCount,
}) {
  const id = useRecoilValue(FollowPostAtom.id);
  const token = useRecoilValue(UserAtom.token);
  const handleHeartActive = async () => {
    const response = await PostHeart(id, token);
    setIsHearted(response.hearted);
    setHeartCount(response.heartCount);
  };

  const handleHeartCancel = async () => {
    const response = await DeleteHeart(id, token);
    setIsHearted(response.hearted);
    setHeartCount(response.heartCount);
  };

  const handleHeartButtonClick = () => {
    setIsHearted((prev) => !prev);
    if (isHearted) {
      handleHeartActive();
    } else {
      handleHeartCancel();
    }
  };
  return (
    <div>
      <button onClick={handleHeartButtonClick}>
        <img src={isHearted ? HeartedIcon : HeartIcon} alt='' />
      </button>
      <p>{heartCount}</p>
    </div>
  );
}
