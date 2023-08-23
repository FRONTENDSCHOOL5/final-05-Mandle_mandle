import React from 'react';
import styled from 'styled-components';

import CardSkeleton from './CardSkeleton';
import ClassSideSkeleton from './ClassSideSkeleton';

export default function ClassSkeleton() {
  return (
    <div>
      <ClassSideSkeletonWrap>
        <ClassSideSkeleton scrollBgColor='var(--background-color)'>
          인기 클래스
        </ClassSideSkeleton>
      </ClassSideSkeletonWrap>
      <SkeletonClassFeed>
        <h2>새로운 클래스</h2>
        <SkeletonClassFeedList>
          <CardSkeleton width='180px' height='174px' imgHeight='120px' />
          <CardSkeleton width='180px' height='174px' imgHeight='120px' />
          <CardSkeleton width='180px' height='174px' imgHeight='120px' />
          <CardSkeleton width='180px' height='174px' imgHeight='120px' />
          <CardSkeleton width='180px' height='174px' imgHeight='120px' />
          <CardSkeleton width='180px' height='174px' imgHeight='120px' />
          <CardSkeleton width='180px' height='174px' imgHeight='120px' />
          <CardSkeleton width='180px' height='174px' imgHeight='120px' />
        </SkeletonClassFeedList>
      </SkeletonClassFeed>
    </div>
  );
}

const ClassSideSkeletonWrap = styled.div`
  padding: 20px 0 0 16px;
`;
const SkeletonClassFeed = styled.div`
  margin-top: 30px;
  padding: 0 10px;
  h2 {
    font-size: var(--font-md);
    margin-bottom: 16px;
  }
`;
const SkeletonClassFeedList = styled.div`
  width: 100px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;
