import React from 'react';
import styled from 'styled-components';

import CardSkeleton from './CardSkeleton';

export default function ClassSideSkeleton({ children, scrollBgColor }) {
  return (
    <ClassSideSkeletonWrap>
      <SkeletonClasstitle>{children}</SkeletonClasstitle>
      <SkeletonClassListWrap scrollBgColor={scrollBgColor}>
        <CardSkeleton width='140px' height='138px' imgHeight='90px' />
        <CardSkeleton width='140px' height='138px' imgHeight='90px' />
        <CardSkeleton width='140px' height='138px' imgHeight='90px' />
      </SkeletonClassListWrap>
    </ClassSideSkeletonWrap>
  );
}

const ClassSideSkeletonWrap = styled.div``;
const SkeletonClasstitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`;
const SkeletonClassListWrap = styled.div`
  padding-bottom: 10px;
  display: flex;

  gap: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    padding-top: 5px;
    background-color: ${(props) => props.scrollBgColor};

    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid ${(props) => props.scrollBgColor};
  }
`;
