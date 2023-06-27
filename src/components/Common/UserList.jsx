import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import BasicProfileImg from '../../assets/img/basic-profile-img.svg';
import HandleNormalizeImage from './HandleNormalizeImage';
import FollowButtton from './FollowButtton';
export default function SearchList({ user, type }) {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;
  const [isfollow, SetFollow] = useState(user.isfollow);

  const handleMoveProfile = () => {
    navigate(`/other_profile/${user.accountname}`, {
      accountname: user.accountname,
    });
  };

  return (
    <SearchListWrap key={user._id}>
      <ProfileWrap onClick={handleMoveProfile}>
        <div>
          <img
            src={HandleNormalizeImage(user.image, BasicProfileImg)}
            alt='프로필 이미지'
          />
        </div>
        <ProfileInfo>
          <div>
            <p>{user.username}</p>
          </div>
          <p>{type ? user.intro : user.accountname}</p>
        </ProfileInfo>
      </ProfileWrap>
      {type && (
        <FollowButtton
          isfollow={isfollow}
          SetFollow={SetFollow}
          accountname={user.accountname}
          token={token}
        />
      )}
    </SearchListWrap>
  );
}

export const SearchListWrap = styled.li`
  display: flex;
  align-items: center;
`;

export const ProfileWrap = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 6px;
  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 18px;
    height: 20px;
  }

  div + p {
    font-size: var(--font-sm);
    color: var(--sub-font-color);
  }
`;
