import React from 'react';
import styled from 'styled-components';
import UserSkeleton from './UserSkeleton';
import { Skeleton } from './Skeleton';
export default function PostSkeleton() {
  return (
    <SkeletonWrap>
      <SkeletonPostList>
        <UserSkeleton />
        <SkeletonContent>
          <SkeletonContentDetail>
            <SkeletonContentDesc></SkeletonContentDesc>
            <SkeletonContentDesc></SkeletonContentDesc>
            <SkeletonContentImg></SkeletonContentImg>
          </SkeletonContentDetail>
        </SkeletonContent>
      </SkeletonPostList>
    </SkeletonWrap>
  );
}

const SkeletonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const SkeletonPostList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 20px;
  gap: 16px;
`;
const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: calc(42px + 10px);
`;
const SkeletonContentDetail = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SkeletonContentDesc = styled(Skeleton)`
  width: 100%;
  height: 14px;
`;
const SkeletonContentImg = styled(Skeleton)`
  height: 228px;
  margin-top: 10px;
  border-radius: 10px;
`;
