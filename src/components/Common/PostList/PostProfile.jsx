import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../assets/img/basic-profile-img.svg';
import MoreBtn from '../../../assets/img/s-icon-more-vertical.svg';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { useRecoilState } from 'recoil';
export default function PostProfile({ author }) {
  return (
    // ProfileWrap 현재 a태그 속성(href)으로 설정해 놨으나 추후 Link(to)로 수정할 것
    <PostProfileWrap to={`/profile`}>
      <img src={ProfileImg} alt='' />
      <PostProfileInfo>
        <div>
          <p>위니브 메이드 공방</p>
          <button>
            <img src={MoreBtn} alt='' />
          </button>
        </div>
        <p>@ mandleee</p>
      </PostProfileInfo>
      {/* <PostProfileWrap to={`/profile/${author.accountname}`}>
        <img src={author.image} alt='프로필 이미지' />
      <PostProfileInfo>
        <div>
          <p>{author.username}</p>
          <button>
            <img src={MoreBtn} alt='' />
          </button>
        </div>
        <p>{author.accountname}</p>
      </PostProfileInfo>
      </PostProfileWrap> */}
    </PostProfileWrap>
  );
}

const PostProfileWrap = styled.a`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`;

const PostProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

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
