import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../assets/img/basic-profile-img.svg';
import MoreBtn from '../../../assets/img/s-icon-more-vertical.svg';
export default function CommentList() {
  return (
    <CommentListWrap>
      <ProfileWrap href=''>
        <img src={ProfileImg} alt='' />
        <ProfileInfo>
          <div>
            <p>위니브 메이드 공방</p>
            <p>5분전</p>
          </div>
          <button>
            <img src={MoreBtn} alt='' />
          </button>
        </ProfileInfo>
      </ProfileWrap>
      <p>잘보고 갑니다!</p>
    </CommentListWrap>
  );
}

const CommentListWrap = styled.li`
  font-size: var(--font-md);
  margin-bottom: 16px;
  img {
    width: 36px;
  }
  a + p {
    padding-left: 48px;
  }
`;

const ProfileWrap = styled.a`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 42px;
    height: 42px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
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
