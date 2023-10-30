import React from 'react';
import styled from 'styled-components';

import { Skeleton } from './Skeleton';
import PostSkeleton from './PostSkeleton';
import ClassSideSkeleton from './ClassSideSkeleton';

import ShareBtn from '../../../assets/img/icon-share.svg';
import ChatBtn from '../../../assets/img/icon-chat-mini.svg';
import PostListBtnOn from '../../../assets/img/icon-post-list-on.svg';
import PostAlbumBtnOff from '../../../assets/img/icon-post-album-off.svg';

export default function ProfileSkeleton({ status, type }) {
  return (
    <ProfileSkeletonWrap>
      <SkeletonProfileSection>
        <SkeletonProfileImg></SkeletonProfileImg>
        <SkeletonProfileName></SkeletonProfileName>
        <SkeletonProfileID></SkeletonProfileID>
        <SkeletonProfileDesc></SkeletonProfileDesc>
        <SkeletonProfileBtnWrap>
          {status === 'other' && (
            <>
              <SkeletonCircleBtn>
                <img src={ChatBtn} alt='채팅 버튼' />
              </SkeletonCircleBtn>
              <SkeletonProfileBtn></SkeletonProfileBtn>
              <SkeletonCircleBtn>
                <img src={ShareBtn} alt='공유 버튼' />
              </SkeletonCircleBtn>
            </>
          )}
          {status === 'my' && (
            <>
              <SkeletonProfileBtn></SkeletonProfileBtn>
              <SkeletonProfileBtn></SkeletonProfileBtn>
            </>
          )}
        </SkeletonProfileBtnWrap>
      </SkeletonProfileSection>
      <ClassSideSkeletonWrap>
        {
          <ClassSideSkeleton scrollBgColor='#fff'>
            클래스 리스트
          </ClassSideSkeleton>
        }
      </ClassSideSkeletonWrap>
      <SkeletonPostSection>
        <SkeletonPostBtnWrap>
          <img src={PostListBtnOn} alt='목록으로 보기 버튼' />
          <img src={PostAlbumBtnOff} alt='앨범으로 보기 버튼' />
        </SkeletonPostBtnWrap>
        <SkeletonPostWrap>
          <PostSkeleton />
          <PostSkeleton />
        </SkeletonPostWrap>
      </SkeletonPostSection>
    </ProfileSkeletonWrap>
  );
}

const ProfileSkeletonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px auto;
`;
const SkeletonProfileSection = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 26px;
`;

const SkeletonProfileImg = styled(Skeleton)`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-bottom: 16px;
`;
const SkeletonProfileName = styled(Skeleton)`
  width: 126px;
  height: 16px;
  margin-bottom: 6px;
`;
const SkeletonProfileID = styled(Skeleton)`
  width: 100px;
  height: 12px;
  margin-bottom: 16px;
`;
const SkeletonProfileDesc = styled(Skeleton)`
  width: 200px;
  height: 14px;
`;
const SkeletonProfileBtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
const SkeletonProfileBtn = styled(Skeleton)`
  width: ${(props) => props.witdh || '120px'};
  height: ${(props) => props.height || '34px'};
  border-radius: 30px;
  border: 1px solid var(--border-color);
`;

const SkeletonPostSection = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  padding: 16px;
`;

const SkeletonPostBtnWrap = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: flex-end;
  padding: 9px 11px;
  gap: 5px;
  border-bottom: 1.5px solid var(--background-color);
  img {
    width: 26px;
    height: 26px;
  }
`;
const SkeletonPostWrap = styled.div`
  padding: 0 11px;
`;

const ClassSideSkeletonWrap = styled.div`
  padding: 10px;
  background-color: #fff;
`;

const SkeletonCircleBtn = styled.div`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
