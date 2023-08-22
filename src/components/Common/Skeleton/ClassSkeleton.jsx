import React from 'react';
import styled from 'styled-components';
import { Skeleton } from './Skeleton';

export default function ClassSkeleton() {
  return (
    <ClassSkeletonWrap>
      <SkeletonClasstitle></SkeletonClasstitle>
      <SkeletonClassListWrap>
        <SkeletonClassContent></SkeletonClassContent>
        <SkeletonClassContent></SkeletonClassContent>
        <SkeletonClassContent></SkeletonClassContent>
      </SkeletonClassListWrap>
    </ClassSkeletonWrap>
  );
}

const ClassSkeletonWrap = styled.div`
  padding: 10px;
  background-color: #fff;
`;
const SkeletonClasstitle = styled.div`
  width: 100%;
  height: 14px;
  margin-bottom: 16px;
`;
const SkeletonClassListWrap = styled.div`
  padding-bottom: 10px;
  display: flex;

  gap: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    padding-top: 5px;
    background-color: white;

    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid white;
  }
`;

const SkeletonClassContent = styled(Skeleton)`
  width: 140px;
  height: 138px;
  flex-shrink: 0;
`;
