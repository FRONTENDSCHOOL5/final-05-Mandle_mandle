import React from 'react';
import styled from 'styled-components';

import { Skeleton } from './Skeleton';
import UserSkeleton from './UserSkeleton';

import HeartBtn from '../../../assets/img/icon-heart.svg';
import ChatBtn from '../../../assets/img/icon-chat-mini.svg';

export default function PostSkeleton() {
  return (
    <SkeletonWrap>
      <SkeletonPostList>
        <UserSkeleton />
        <SkeletonContent>
          <SkeletonContentDetail>
            <SkeletonContentDesc></SkeletonContentDesc>
            <SkeletonContentImg></SkeletonContentImg>
          </SkeletonContentDetail>
          <SkeletonClassLinkBtn></SkeletonClassLinkBtn>

          <SkeletonIconWrap>
            <SkeletonBtnWrap>
              <img src={HeartBtn} alt='' />
              <img src={ChatBtn} alt='' />
            </SkeletonBtnWrap>
            <SkeletonPostDate></SkeletonPostDate>
          </SkeletonIconWrap>
        </SkeletonContent>
      </SkeletonPostList>
    </SkeletonWrap>
  );
}

const SkeletonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SkeletonPostList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 20px;
  gap: 16px;
`;
const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 48px;
`;
const SkeletonContentDetail = styled.div`
  width: 304px;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

const SkeletonContentDesc = styled(Skeleton)`
  width: 100%;
  height: 14px;
`;
const SkeletonContentImg = styled(Skeleton)`
  height: 228px;
  border-radius: 10px;
`;
const SkeletonBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 31px;
`;

const SkeletonClassLinkBtn = styled(Skeleton)`
  width: 304px;
  height: 68px;

  border-radius: 10px;
  margin-bottom: 6px;
`;

const SkeletonIconWrap = styled.div`
  display: flex;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
`;

const SkeletonPostDate = styled(Skeleton)`
  width: 100px;
  height: 12px;
`;
