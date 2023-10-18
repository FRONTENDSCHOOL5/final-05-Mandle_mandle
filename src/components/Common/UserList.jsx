import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import FollowButtton from './FollowButtton';
import NormalizeImage from './NormalizeImage';
import TeacherIcon from '../../assets/img/icon-teacher.svg';

export default function SearchList({ user, type, keyword }) {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;
  const [isfollow, SetFollow] = useState(user.isfollow);
  const parts = user.username.split(new RegExp(`(${keyword})`));

  const handleMoveProfile = () => {
    navigate(`/other_profile/${user.accountname}`, {
      accountname: user.accountname,
    });
  };
  const validAccountname =
    user.accountname.substr(0, 7) === 'Student' ||
    user.accountname.substr(0, 7) === 'Teacher'
      ? user.accountname.substr(7)
      : user.accountname;

  return (
    <SearchListWrap key={user._id}>
      <ProfileWrap onClick={handleMoveProfile}>
        <div>
          <img src={NormalizeImage(user.image)} alt='프로필 이미지' />
        </div>
        <ProfileInfo>
          <div>
            <p>
              {parts.map((part, i) =>
                part === keyword ? <span key={i}>{part}</span> : part,
              )}
            </p>
            {user.accountname.substr(0, 7) === 'Teacher' && (
              <img src={TeacherIcon} alt='강사 아이콘' />
            )}
          </div>
          <p>{type ? user.intro : validAccountname}</p>
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
    div {
      display: flex;
      gap: 3px;
      align-items: c;
      span {
        font-weight: 700;
        color: var(--main-color);
      }
      img {
        width: 12px;
        height: 12px;
      }
    }
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
