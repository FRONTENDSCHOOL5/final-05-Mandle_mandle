import React from 'react';
import styled from 'styled-components';

import { Skeleton } from './Skeleton';

export default function ClassDetailSkeleton() {
  return (
    <>
      <SkeletonImg />
      <div>
        <SkeletonTeacher />
        <SkeletonTag />
        <SkeletonName />
        <SkeletonPrice />
      </div>
    </>
  );
}

export const SkeletonImg = styled(Skeleton)`
  height: 220px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const SkeletonTeacher = styled(Skeleton)`
  width: 100px;
  height: 20px;
  position: relative;
  float: right;
`;

export const SkeletonTag = styled(Skeleton)`
  width: 100px;
  height: 14px;
`;

export const SkeletonName = styled(Skeleton)`
  width: 210px;
  height: 16px;
  margin: 4px 0 11px;
`;

export const SkeletonPrice = styled(Skeleton)`
  width: 160px;
  height: 20px;
  margin: 4px 0 20px;
`;
