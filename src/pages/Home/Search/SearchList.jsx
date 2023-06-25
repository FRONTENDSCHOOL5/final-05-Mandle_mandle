import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileWrap, ProfileInfo } from './SearchStyle';
import BasicProfileImg from '../../../assets/img/basic-profile-img.svg';
import HandleNormalizeImage from '../../../Hooks/HandleNormalizeImage';
export default function SearchList({ account }) {
  const navigate = useNavigate();
  const handleMoveProfile = () => {
    navigate(`/other_profile/${account.accountname}`);
  };

  return (
    <li key={account._id}>
      <ProfileWrap onClick={handleMoveProfile}>
        <div>
          <img
            src={HandleNormalizeImage(account.image, BasicProfileImg)}
            alt='프로필 이미지'
          />
        </div>
        <ProfileInfo>
          <div>
            <p>{account.username}</p>
          </div>
          <p>{account.accountname}</p>
        </ProfileInfo>
      </ProfileWrap>
    </li>
  );
}
